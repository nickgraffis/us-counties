export type State = 'West Virginia' | 'Florida' | 'Illinois' | 'Minnesota' | 'Maryland' | 'Rhode Island' | 'Idaho' | 'New Hampshire' | 'North Carolina' | 'Vermont' | 'Connecticut' | 'Delaware' | 'New Mexico' | 'California' | 'New Jersey' | 'Wisconsin' | 'Oregon' | 'Nebraska' | 'Pennsylvania' | 'Washington' | 'Louisiana' | 'Georgia' | 'Alabama' | 'Utah' | 'Ohio' | 'Texas' | 'Colorado' | 'South Carolina' | 'Oklahoma' | 'Tennessee' | 'Wyoming' | 'Hawaii' | 'North Dakota' | 'Kentucky' | 'United States Virgin Islands' | 'Commonwealth of the Northern Mariana Islands' | 'Guam' | 'Maine' | 'New York' | 'Nevada' | 'Alaska' | 'American Samoa' | 'Michigan' | 'Arkansas' | 'Mississippi' | 'Missouri' | 'Montana' | 'Kansas' | 'Indiana' | 'Puerto Rico' | 'South Dakota' | 'Massachusetts' | 'Virginia' | 'District of Columbia' | 'Iowa' | 'Arizona';
export type StateAbv = 'WV' | 'FL' | 'IL' | 'MN' | 'MD' | 'RI' | 'ID' | 'NH' | 'NC' | 'VT' | 'CT' | 'DE' | 'NM' | 'CA' | 'NJ' | 'WI' | 'OR' | 'NE' | 'PA' | 'WA' | 'LA' | 'GA' | 'AL' | 'UT' | 'OH' | 'TX' | 'CO' | 'SC' | 'OK' | 'TN' | 'WY' | 'HI' | 'ND' | 'KY' | 'ME' | 'NY' | 'NV' | 'AK' | 'MI' | 'AR' | 'MS' | 'MO' | 'MT' | 'KS' | 'IN' | 'SD' | 'MA' | 'VA' | 'IA' | 'AZ';
export type StateNumberCodes = '54' | '12' | '17' | '27' | '24' | '44' | '16' | '33' | '37' | '50' | '09' | '10' | '35' | '06' | '34' | '55' | '41' | '31' | '42' | '53' | '22' | '13' | '01' | '49' | '39' | '48' | '08' | '45' | '40' | '47' | '56' | '15' | '38' | '21' | '78' | '69' | '66' | '23' | '36' | '32' | '02' | '60' | '26' | '05' | '28' | '29' | '30' | '20' | '18' | '72' | '46' | '25' | '51' | '11' | '19' | '04';
export type County<T> = T & {
    name: string;
    stateName: State;
    stateAbbr: StateAbv;
    state: State | StateAbv;
    contiguous: boolean;
};
export type SerializedCountyData = {
    n: string;
    s: string;
    c: string;
};
export declare const WhereOperations: {
    readonly '===': "is equal to";
    readonly '!==': "is not equal to";
    readonly '>': "is greater than";
    readonly '>=': "is greater than or equal to";
    readonly '<': "is less than";
    readonly '<=': "is less than or equal to";
    readonly in: "is in";
    readonly notIn: "is not in";
    readonly contains: "contains";
    readonly notContains: "does not contain";
    readonly beginsWith: "begins with";
    readonly endsWith: "ends with";
    readonly includes: "includes";
    readonly notIncludes: "does not include";
    readonly exists: "exists";
    readonly notExists: "does not exist";
    readonly isTrue: "is true";
    readonly isFalse: "is false";
    readonly isTruthy: "is truthy";
    readonly isFalsy: "is falsy";
};
export type WhereOperation = keyof typeof WhereOperations;
