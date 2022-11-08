export type State = 'West Virginia' | 'Florida' | 'Illinois' | 'Minnesota' | 'Maryland' | 'Rhode Island' | 'Idaho' | 'New Hampshire' | 'North Carolina' | 'Vermont' | 'Connecticut' | 'Delaware' | 'New Mexico' | 'California' | 'New Jersey' | 'Wisconsin' | 'Oregon' | 'Nebraska' | 'Pennsylvania' | 'Washington' | 'Louisiana' | 'Georgia' | 'Alabama' | 'Utah' | 'Ohio' | 'Texas' | 'Colorado' | 'South Carolina' | 'Oklahoma' | 'Tennessee' | 'Wyoming' | 'Hawaii' | 'North Dakota' | 'Kentucky' | 'United States Virgin Islands' | 'Commonwealth of the Northern Mariana Islands' | 'Guam' | 'Maine' | 'New York' | 'Nevada' | 'Alaska' | 'American Samoa' | 'Michigan' | 'Arkansas' | 'Mississippi' | 'Missouri' | 'Montana' | 'Kansas' | 'Indiana' | 'Puerto Rico' | 'South Dakota' | 'Massachusetts' | 'Virginia' | 'District of Columbia' | 'Iowa' | 'Arizona'

export type StateAbv = 'WV' | 'FL' | 'IL' | 'MN' | 'MD' | 'RI' | 'ID' | 'NH' | 'NC' | 'VT' | 'CT' | 'DE' | 'NM' | 'CA' | 'NJ' | 'WI' | 'OR' | 'NE' | 'PA' | 'WA' | 'LA' | 'GA' | 'AL' | 'UT' | 'OH' | 'TX' | 'CO' | 'SC' | 'OK' | 'TN' | 'WY' | 'HI' | 'ND' | 'KY' | 'undefined' | 'undefined' | 'undefined' | 'ME' | 'NY' | 'NV' | 'AK' | 'undefined' | 'MI' | 'AR' | 'MS' | 'MO' | 'MT' | 'KS' | 'IN' | 'undefined' | 'SD' | 'MA' | 'VA' | 'undefined' | 'IA' | 'AZ'

export type StateNumberCodes = '54' | '12' | '17' | '27' | '24' | '44' | '16' | '33' | '37' | '50' | '09' | '10' | '35' | '06' | '34' | '55' | '41' | '31' | '42' | '53' | '22' | '13' | '01' | '49' | '39' | '48' | '08' | '45' | '40' | '47' | '56' | '15' | '38' | '21' | '78' | '69' | '66' | '23' | '36' | '32' | '02' | '60' | '26' | '05' | '28' | '29' | '30' | '20' | '18' | '72' | '46' | '25' | '51' | '11' | '19' | '04'

export type County<T> = T & {
  name: string;
  state: StateAbv | State;
  FIPS: string;
} 