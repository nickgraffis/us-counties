import type { State, StateAbv, County, SerializedCountyData } from './types';
import countiesSerialized from '../data/counties.json' assert { type: 'json' };
import statesSerialized from '../data/states.json' assert { type: 'json' };
export const statesdata = statesSerialized as unknown as Record<StateAbv, State>;
export const countiesdata = countiesSerialized as unknown as Record<string, { n: string; c: string; s: string }>;
function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
  return coll.includes(el as T);
}

export type USCountiesPlugin<Data extends {} = {}> = {
  data?: [string, Data][];
  methods?: { [key: string]: any };
  keyMap?: { [key: string]: any };
};

export class USCounties<Data extends {} = {}> {
  readonly #include: State[] | StateAbv[] | undefined;
  readonly #exclude: State[] | StateAbv[] | undefined;
  #key = 'FIPS';
  public counties = new Map<string, County<Data>>();
  public states = new Map<StateAbv, State>();
  #result = new Map<string, County<Data>>();
  #groups = {};
  #constructorArgs;
  constructor({
    include,
    exclude,
    contiguousOnly,
    stateFormat,
    plugins,
    counties,
  }: {
    include?: State[] | StateAbv[];
    exclude?: State[] | StateAbv[];
    stateFormat?: 'abbr' | 'full';
    contiguousOnly?: boolean;
    plugins?: USCountiesPlugin[];
    counties?: Map<string, County<Data>>;
  } = {}) {
    this.#constructorArgs = {
      include,
      exclude,
      contiguousOnly,
      stateFormat,
      plugins,
    };
    if (counties) {
      this.counties = counties;
      return;
    }

    this.#include = include ? (Array.isArray(include) ? include : [include]) : undefined;
    this.#exclude = exclude ? (Array.isArray(exclude) ? exclude : [exclude]) : undefined;
    this.counties = new Map(countiesSerialized as any);
    this.states = new Map(statesSerialized as any);

    (this.counties as unknown as Map<string, SerializedCountyData>).forEach((county: SerializedCountyData, FIPS) => {
      const continueForEach = () => {
        this.counties.set(FIPS, {
          stateName: this.states.get(county.s as StateAbv) as State,
          stateAbbr: county.s as StateAbv,
          state: stateFormat === 'abbr' ? (county.s as StateAbv) : (this.states.get(county.s as StateAbv) as State),
          name: county.n as string,
          contiguous: county.c === 't',
        } as County<Data>);

        if (plugins && plugins.length > 0) {
          plugins.forEach((plugin) => {
            if (plugin.data) {
              const pluginMap = new Map(plugin.data);
              const keyMap = plugin?.keyMap || null;
              this.counties.set(FIPS, {
                ...this.counties.get(FIPS),
                ...(keyMap
                  ? Object.keys(keyMap).reduce((acc, key) => {
                      if (key in keyMap) {
                        const innerKey = keyMap[key as keyof { [key: string]: any }] as string;
                        // @ts-ignore
                        const innerValue = pluginMap.get(FIPS)?.[key] as any;
                        (acc as { [key: string]: any })[innerKey] = innerValue;
                      }
                      return acc;
                    }, {})
                  : pluginMap.has(FIPS)
                  ? pluginMap.get(FIPS)
                  : {}),
              } as County<Data>);
            }
          });
        }
      };

      const handleIncludes = () => {
        if (this.#include && !includes(this.#include, county.s)) {
          this.counties.delete(FIPS);
        } else {
          continueForEach();
        }
      };

      const handleExcludes = () => {
        if (this.#exclude && includes(this.#exclude, county.s)) {
          this.counties.delete(FIPS);
        } else {
          continueForEach();
        }
      };

      if (contiguousOnly) {
        if (county.c === 'f') {
          this.counties.delete(FIPS);
        } else continueForEach();
      } else if (this.#include) handleIncludes();
      else if (this.#exclude) handleExcludes();
      else continueForEach();
    });

    if (plugins && plugins.length > 0) {
      plugins.forEach((plugin) => {
        if (plugin.methods) {
          Object.keys(plugin.methods).forEach((method) => {
            type MethodType = Omit<Omit<typeof USCounties.prototype, 'length'>, 'groups'>;
            if (plugin.methods?.[method]) {
              USCounties.prototype[method as keyof MethodType] = plugin.methods[method];
            }
          });
        }
      });
    }

    this.#result = this.counties;
  }

  /**
   * `in` filters the counties map by state
   *
   * @param state - a state or array of states to filter by
   * @returns - a current instance of the USCounties class
   * get results with `get` or `res` or `result` for the map
   * and not an array.
   */
  in(state: State | StateAbv | (State | StateAbv)[]) {
    const states = Array.isArray(state) ? state : [state];

    return this.#filterBy((county) => includes(states, county.state));
  }

  /**
   * `notIn` filters the counties map by state
   *
   * @param state - a state or array of states to filter by
   * @returns - a current instance of the USCounties class
   * get results with `get` or `res` or `result` for the map
   * and not an array.
   */
  notIn(state: State | StateAbv | (State | StateAbv)[]) {
    const states = Array.isArray(state) ? state : [state];

    return this.#filterBy((county) => !includes(states, county.state));
  }

  #filterBy(fn: (county: County<{}>) => boolean) {
    this.#result.forEach((county, key) => {
      if (!fn(county)) {
        this.#result.delete(key);
      }
    });
    return this;
  }

  /**
   * `find` filters the counties map by name property
   * or a custom field if a `field` param is provided.
   * Exact matches only.
   *
   * @param name - the name of the county
   * @returns
   */
  find(name: string, field?: string) {
    field = field || 'name';
    return this.#filterBy((county) => county[field as keyof County<{}>] === name);
  }

  get(key: string) {
    return {
      ...this.#result.get(key),
      [this.#key]: key,
    };
  }

  set(key: string, value: any) {
    this.#result.set(key, value);
  }

  has(key: string) {
    return this.#result.has(key);
  }

  keyBy(key: string) {
    this.#key = key;
    const map = new Map();
    this.#result.forEach((county, FIPS) => {
      map.set(county[key as keyof County<{}>], {
        ...county,
        FIPS,
      });
    });

    this.#result = map;

    return this;
  }

  res(max?: number) {
    if (max) return [...this.#result].slice(0, max);
    return [...this.#result];
  }

  contains(name: string, field?: string) {
    field = field || 'name';
    return this.#filterBy((county) => (county[field as keyof County<{}>] as string).includes(name));
  }

  where(key: string, op: string, value: any) {
    return this.#filterBy((county) => {
      switch (op) {
        case '===':
          return county[key as keyof County<{}>] === value;
        case '!==':
          return county[key as keyof County<{}>] !== value;
        case '>':
          return county[key as keyof County<{}>] > value;
        case '>=':
          return county[key as keyof County<{}>] >= value;
        case '<':
          return county[key as keyof County<{}>] < value;
        case '<=':
          return county[key as keyof County<{}>] <= value;
        case 'in':
          return Array.isArray(value) ? value.includes(county[key as keyof County<{}>]) : false;
        case 'notIn':
          return Array.isArray(value) ? !value.includes(county[key as keyof County<{}>]) : false;
        case 'contains':
          return Array.isArray(county[key as keyof County<{}>])
            ? (county[key as keyof County<{}>] as string).includes(value)
            : false;
        case 'notContains':
          return Array.isArray(county[key as keyof County<{}>])
            ? !(county[key as keyof County<{}>] as string).includes(value)
            : false;
        case 'beginsWith':
          return (county[key as keyof County<{}>] as string).startsWith(value);
        case 'endsWith':
          return (county[key as keyof County<{}>] as string).endsWith(value);
        case 'includes':
          return (county[key as keyof County<{}>] as string).includes(value);
        case 'notIncludes':
          return !(county[key as keyof County<{}>] as string).includes(value);
        case 'exists':
          return county[key as keyof County<{}>] !== undefined;
        case 'notExists':
          return county[key as keyof County<{}>] === undefined;
        case 'isTrue':
          return county[key as keyof County<{}>] === true;
        case 'isFalse':
          return county[key as keyof County<{}>] === false;
        case 'isTruthy':
          return !!county[key as keyof County<{}>];
        case 'isFalsy':
          return !county[key as keyof County<{}>];
        default:
          return false;
      }
    });
  }

  get result() {
    return this.#result;
  }

  set result(map: Map<string, County<Data>>) {
    this.#result = map;
  }

  get length() {
    return this.#result.size;
  }

  reset() {
    this.#result = this.counties;
    return this;
  }

  groupBy(key: string) {
    this.#result.forEach((county, k) => {
      const group = county[key as keyof County<{}>];
      if (this.#groups?.[group as keyof {}] && !(this.#groups[group as keyof {}] as Map<string, any>).has(k)) {
        (this.#groups[group as keyof {}] as Map<string, any>).set(k, county);
      } else if (!this.#groups?.[group as keyof {}]) {
        const newMap = new USCounties<Data>({
          ...this.#constructorArgs,
          counties: new Map([[k, county]]),
        });
        // @ts-ignore
        this.#groups[group as keyof {}] = newMap;
        (this.#groups[group as keyof {}] as Map<string, any>).set(k, county);
      }
    });

    return this;
  }

  get groups() {
    return this.#groups;
  }

  group(key: string) {
    return this.#groups[key as keyof {}] as USCounties<Data>;
  }

  toArray() {
    return [...this.#result].map(([key, county]) => ({ FIPS: key, ...county }));
  }
}

export const counties = new USCounties();

/** Make sure we stay reverse compatable  */
export const getCountyByNameIncludes = (name: string) => {
  return counties.find(name).toArray();
};

export const getCountyByNameStartsWith = (name: string) => {
  return counties.where('name', 'beginsWith', name).toArray();
};

export const getCountyByFips = (fips: string) => {
  return counties.get(fips);
};

export const getCountyByState = (state: State | StateAbv) => {
  return counties.in(state).toArray();
};
