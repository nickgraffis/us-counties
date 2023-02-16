import type { State, StateAbv, County, WhereOperation } from './types';
export { normalizeState } from './utils';
export type USCountiesAgs<Data = {}> = {
    include?: State[] | StateAbv[];
    exclude?: State[] | StateAbv[];
    stateFormat?: 'abbr' | 'full';
    contiguousOnly?: boolean;
    plugins?: USCountiesPlugin[];
    counties?: Map<string, County<Data>>;
};
export declare const statesdata: [StateAbv, State];
export declare const countiesdata: [string, {
    n: string;
    c: string;
    s: string;
}];
export type USCountiesPlugin<Data extends {} = {}> = {
    data?: [string, Data][];
    methods?: {
        [key: string]: any;
    };
    keyMap?: {
        [key: string]: any;
    };
};
export declare class USCounties<Data extends {} = {}> {
    #private;
    counties: Map<string, County<Data>>;
    states: Map<StateAbv, State>;
    constructor({ include, exclude, contiguousOnly, stateFormat, plugins, counties, }?: USCountiesAgs<Data>);
    in(state: State | StateAbv | (State | StateAbv)[]): this;
    notIn(state: State | StateAbv | (State | StateAbv)[]): this;
    find(name: string, field?: string): this;
    get(key: string): County<Data>;
    set(key: string, value: any): void;
    has(key: string): boolean;
    keyBy(key: string): this;
    res(max?: number): [string, County<Data>][];
    contains(name: string, field?: string): this;
    where(key: string, op: WhereOperation, value: any): this;
    get result(): Map<string, County<Data>>;
    set result(map: Map<string, County<Data>>);
    get length(): number;
    reset(): this;
    groupBy(key: string): this;
    get groups(): {};
    group(key: string): USCounties<Data>;
    toArray(): ({
        FIPS: string;
    } & Data & {
        name: string;
        stateName: State;
        stateAbbr: StateAbv;
        state: State | StateAbv;
        contiguous: boolean;
    })[];
}
export declare const counties: (args?: USCountiesAgs) => USCounties<{}>;
export declare const getCountyByNameIncludes: (name: string) => ({
    FIPS: string;
} & {
    name: string;
    stateName: State;
    stateAbbr: StateAbv;
    state: State | StateAbv;
    contiguous: boolean;
})[];
export declare const getCountyByNameStartsWith: (name: string) => ({
    FIPS: string;
} & {
    name: string;
    stateName: State;
    stateAbbr: StateAbv;
    state: State | StateAbv;
    contiguous: boolean;
})[];
export declare const getCountyByFips: (fips: string) => {
    name: string;
    stateName: State;
    stateAbbr: StateAbv;
    state: State | StateAbv;
    contiguous: boolean;
};
export declare const getCountyByState: (state: State | StateAbv) => ({
    FIPS: string;
} & {
    name: string;
    stateName: State;
    stateAbbr: StateAbv;
    state: State | StateAbv;
    contiguous: boolean;
})[];
