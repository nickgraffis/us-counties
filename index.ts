import { State, StateAbv, County } from './types';
import counties from './counties';

function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
  return coll.includes(el as T);
}

export class USCounties {
  readonly #include: State[] | StateAbv[] | undefined;
  readonly #exclude: State[] | StateAbv[] | undefined;;
  public counties = new Map<string, County<{}>>();
  #result = new Map<string, County<{}>>();

  constructor({
    include,
    exclude,
    contiguousOnly,
    plugins
  }: {
    include?: State[] | StateAbv[];
    exclude?: State[] | StateAbv[];
    contiguousOnly?: boolean;
    plugins?: { data: Map<string, any>, methods: { [key: string ]: Function } }[];
  }) {
    this.#include = include ? Array.isArray(include) ? include : [include] : undefined;
    this.#exclude = exclude ? Array.isArray(exclude) ? exclude : [exclude] : undefined;
    
    for (let i = 0; i < counties.length; i++) {
      if (contiguousOnly && (counties[i].state === 'AK' || counties[i].state === 'HI')) {
        continue;
      } else if (this.#include && !this.#exclude && !contiguousOnly) {
        if (includes(this.#include, counties[i].state)) {
          this.counties.set(counties[i].FIPS, { ...counties[i], ...(plugins?.map((plugin: { data: Map<string, any>}) => plugin.data.get(counties[i].FIPS)).reduce((acc, curr) => ({ ...acc, ...curr }), {}) || {}) });
        } else {
          continue;
        }
      } else if (this.#exclude && !this.#include && !contiguousOnly) {
        if (!includes(this.#exclude, counties[i].state)) {
          this.counties.set(counties[i].FIPS, { ...counties[i], ...(plugins?.map((plugin: { data: Map<string, any>}) => plugin.data.get(counties[i].FIPS)).reduce((acc, curr) => ({ ...acc, ...curr }), {}) || {}) });
        } else {
          continue;
        }
      } else if (this.#include && this.#exclude && !contiguousOnly) {
        if (includes(this.#include, counties[i].state) && !includes(this.#exclude, counties[i].state)) {
          this.counties.set(counties[i].FIPS, { ...counties[i], ...(plugins?.map((plugin: { data: Map<string, any>}) => plugin.data.get(counties[i].FIPS)).reduce((acc, curr) => ({ ...acc, ...curr }), {}) || {}) });
        } else {
          continue;
        }
      } else {
        this.counties.set(counties[i].FIPS, { ...counties[i], ...(plugins?.map((plugin: { data: Map<string, any>}) => plugin.data.get(counties[i].FIPS)).reduce((acc, curr) => ({ ...acc, ...curr }), {}) || {}) });
      }
    }

    if (plugins && plugins.length > 0) {
      plugins.forEach(plugin => {
        Object.keys(plugin.methods).forEach(method => {
          USCounties.prototype[method] = plugin.methods[method];
        })
      })
    }

    this.#result = this.counties;
  }

  /**
   * `in` filters the counties map by state
   * 
   * @param state - a state or array of states to filter by
   * @returns - a current instance of the USCounties class
   * get results with `get` or `all`
   */
  in(state: State | StateAbv | (State | StateAbv)[]) {
    const states = Array.isArray(state) ? state : [state];
    // filter the counties map by state
    this.#result = new Map([...this.#result].filter(([key, county]) => {
      return includes(states, county.state);
    }))

    return this
  }

  /**
   * `notIn` filters the counties map by state
   * 
   * @param state - a state or array of states to filter by
   * @returns - a current instance of the USCounties class
   * get results with `get` or `all`
   */
  notIn(state: State | StateAbv | (State | StateAbv)[]) {
    const states = Array.isArray(state) ? state : [state];
    // filter the counties map by state

    this.#result = new Map([...this.#result].filter(([key, county]) => {
      return !includes(states, county.state);
    }))

    return this
  }

  find(name: string) {
    this.#result = new Map([...this.#result].filter(([key, county]) => {
      return county.name.includes(name);
    }))
    return this
  }

  get(key: string) {
    return this.#result.get(key);
  }

  all() {
    return this.#result;
  }

  contains(name: string) {
    this.#result = new Map([...this.#result].filter(([key, county]) => {
      return county.name.includes(name);
    }))

    return this
  }

  where(key: string, op: string, value: any) {
    // this is mostly for plugins
    this.#result = new Map([...this.#result].filter(([k, county]) => {
      switch (op) {
        case '===':
          return county[key] === value;
        case '!==':
          return county[key] !== value;
        case '>':
          return county[key] > value;
        case '>=':
          return county[key] >= value;
        case '<':
          return county[key] < value;
        case '<=':
          return county[key] <= value;
        case 'in':
          return Array.isArray(value) ? value.includes(county[key]) : false;
        case 'notIn':
          return Array.isArray(value) ? !value.includes(county[key]) : false;
        case 'contains':
          return Array.isArray(county[key]) ? county[key].includes(value) : false;
        case 'notContains':
          return Array.isArray(county[key]) ? !county[key].includes(value) : false;
        case 'beginsWith':
          return county[key].startsWith(value);
        case 'endsWith':
          return county[key].endsWith(value);
        case 'includes':
          return county[key].includes(value);
        case 'notIncludes':
          return !county[key].includes(value);
        case 'exists':
          return county[key] !== undefined;
        case 'notExists':
          return county[key] === undefined;
        case 'isTrue':
          return county[key] === true;
        case 'isFalse':
          return county[key] === false;
        case 'isTruthy':
          return !!county[key];
        case 'isFalsy':
          return !county[key];
        default:
          return false;
      }
    }))

    return this;
  }

  sort(fn: (a: County<{}>, b: County<{}>) => number) {
    return [...this.#result].sort(([keyA, countyA], [keyB, countyB]) => fn(countyA, countyB));
  }

  map(fn: (county: County<{}>) => any) {
    return [...this.#result].map(([key, county]) => fn(county));
  }

  filter(fn: (county: County<{}>) => boolean) {
   this.#result = new Map([...this.#result].filter(([key, county]) => fn(county)));

    return this
  }

  reduce(fn: (acc: any, county: County<{}>) => any, initialValue: any) {
    return [...this.#result].reduce((acc, [key, county]) => fn(acc, county), initialValue);
  }

  get result() {
    return [...this.#result];
  }

  get length() {
    return this.#result.size;
  }

  polygons() {
    return Promise.all([...this.#result].map(([key, county]) => {
      return fetch(`https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json`)
        .then(res => res.json())
        .then(data => {
          const countyPolygons = data.features.filter((feature: any) => feature.id === county.FIPS);
          return countyPolygons;
        })
    }))
  }

  reset() {
    this.#result = this.counties;
    return this;
  }

  groupBy(key: string) {
    const groups = new Map();
    [...this.#result].forEach(([k, county]) => {
      if (groups.has(county[key])) {
        groups.get(county[key]).push(county);
      } else {
        groups.set(county[key], [county]);
      }
    })

    return groups;
  }

  toArray() {
    return [...this.#result].map(([key, county]) => county);
  }
}

export default USCounties;

/** Make sure we stay reverse compatable  */
export const getCountyByNameIncludes = (name: string) => {
  return new USCounties({}).find(name).toArray();
}

export const getCountyByNameStartsWith = (name: string) => {
  return new USCounties({}).where('name', 'beginsWith', name).toArray();
}

export const getCountyByFips = (fips: string) => {
  return new USCounties({}).get(fips);
}

export const getCountyByState = (state: State | StateAbv) => {
  return new USCounties({}).in(state).toArray();
}