# 🇺🇸 US-Counties 
County-level data for the United States of America, and methods to search, filter, sort, and manipulate the data.

## Getting Started

```bash
npm install @nickgraffis/us-counties
```

💡 _Or with yarn, pnpm, etc._

### Basic Useage

```ts
import { counties } from '@nickgraffis/us-counties'

// Find by name
const losAngelesCounty = counties.find('Los Angeles')

// Group by state
const countiesInCalifornia = counties.groupBy('state').group('CA')

// Get by FIPS
const sanFranciscoCounty = countiesInCalifornia.get('06075')
```

## Data

Date comes from the [US Census Bureau](https://www2.census.gov/data). The most recent update is from 2021.

## Use the Raw Data
You can import the `countiesdata` data directly from the package. This is a serialized Map of FIPS codes to county data objects. The structure is as follows:

```ts
[
  FIPS, 
  { 
    n: name, 
    s: state abbreviation, 
    c: 't' or 'f' for weather or not it is contiguous 
  }
]
```
::: info
Storing the data with keys like `n`, `s`, `c` is to save space. The data is serialized with `JSON.stringify`. The size is 23kb gzipped and 139kb uncompressed.
:::
```ts
import { countiesdata } from '@nickgraffis/us-counties';
const counties = new Map(countiesdata);

counties.get('06037'); // { n: 'San Francisco', s: 'CA', c: 't' }
```

## Backwards Compatibility
In the previous version of this package (`v0.0.1`) there was less functionality and arrays were used instead of Maps. If you need to use the old version, those are still exported from the package. 

Although there was only one previous version, and the weekly downloads caped at around 13, we mostly wanted to ensure that there was no breaking change for anyone using the package.

Learn more about the previous version [here](v001).

## Methods
The `Counties` class has a few helpful methods. This can be accessed when you import the named object, `counties`, or new up an instance of the default export.

#### `get(fips: string)`
Returns the county data for the given FIPS code, or `undefined` if the county is not found. Same as `get` on a Map.

```ts
counties.get('06037'); // { name: 'San Francisco', state: 'CA' }
```

#### `has(fips: string)`
Returns `true` if the county is found, `false` otherwise. Same as `has` on a Map.

```ts
counties.has('06037'); // true
```

#### `set(fips: string, data: object)`
Sets the county data for the given FIPS code. Same as `set` on a Map.

```ts
counties.set('06037', { name: 'San Francisco', state: 'CA' });
```

#### `in(state: string | string[])`
Returns a new `Counties` instance with only the counties in the given state.

:::details Example
```ts
const countiesInCalifornia = counties.in('CA'); // Counties instance
const countiesInCaliforniaAndNevada = counties.in(['CA', 'NV']); // Counties instance
```
:::

#### `notIn(state: string | string[])`
Returns a new `Counties` instance with only the counties not in the given state.

:::details Example
```ts
const countiesNotInCalifornia = counties.notIn('CA'); // Counties instance
const countiesNotInCaliforniaOrNevada = counties.notIn(['CA', 'NV']); // Counties instance
```
:::

#### `find(value: string, key?: string)`
Returns a new `Counties` instance with only the counties that match the given value. If a key is provided, it will only search that key. Otherwise, it will search the `name` of the county.

:::details Example
```ts
const losAngeles = counties.find('Los Angeles'); // Counties instance
// Find is strict, this will return an empty instance
const notLosAngeles = counties.find('Los Ang'); 
const countiesInCalifornia = counties.find('CA', 'state'); // Counties instance
```
:::

#### `contains(value: string, key?: string)`
Returns a new `Counties` instance with only the counties that contain the given value. If a key is provided, it will only search that key. Otherwise, it will search the `name` of the county.

:::details Example
```ts
const countiesWithLos = counties.contains('Los'); // Counties instance
const countiesInCalifornia = counties.contains('CA', 'state'); // Counties instance
```
:::

#### `keyBy(key: string)`
Returns a new `Counties` instance with the counties keyed by the given key. This is useful for grouping counties by a key.

:::details Example
```ts
const countiesByState = counties.keyBy('state'); // Counties instance
```
:::

#### `groupBy(key: string)`
Creates a new `Counties` instance for each group of counties that have the same value for the given key. To access the groups, you can use the `groups` method.

#### `group(key: string)`
Returns the `Counties` instance for the group of counties that have the same value for the given key.

:::details Example
```ts
import { counties } from '@nickgraffis/us-counties';

const countiesByState = counties.groupBy('state');

const caCounties = countiesByState.group('CA')
caCounties.contains('San').res()
// {
//   '06037': { fips: '06037', name: 'San Francisco', state: 'CA' },
//   '06075': { fips: '06075', name: 'San Mateo', state: 'CA' },
//   .........
// }

```
:::

### `groups()`
Returns an array of the `Counties` instances for each group of counties. To access the groups, you can use the `group` method.

:::details Example
```ts
import { counties } from '@nickgraffis/us-counties';

const countiesByState = counties.groupBy('state');

const caCounties = countiesByState.groups()[0]
caCounties.contains('San').res()
// {
//   '06037': { fips: '06037', name: 'San Francisco', state: 'CA' },
//   '06075': { fips: '06075', name: 'San Mateo', state: 'CA' },
//   .........
// }

```
:::

#### `res(max?: number)`
Returns an array of the county data objects. If a `max` is provided, it will return the first `max` number of counties.

:::details Example
```ts
const firstTenCounties = counties.res(10);
// [
//   ['87468', { name: 'Autauga', state: 'AL' }],
//   ['87468', { name: 'Baldwin', state: 'AL' }],
//   .........
// ]
```
:::

::: tip
Note that the `res()` method returns an array of tuples. The first value is the FIPS code, and the second value is the county data object. It does not return another instance of the `Counties` class or a Map.
:::

#### `get result`
Unlike the `res()` method, this getter returns a Map of the county data objects.

:::details Example
```ts
const allCounties = counties.result //A Map of all counties
```
:::

#### `get length`
Returns the number of counties currently in the instance.

:::details Example
```ts
const numberOfCounties = counties.length //53
```
:::

#### `reset()`
Resets the instance to the original data that was avaliable when the class was instciated.

:::details Example
```ts
counties.contains('San')
counties.length // 53
counties.reset()
counties.length // 3143
```
:::

### Array Methods
You can get an array of the county data objects by using the `res()` method. From there you can use any of the array methods.

:::details Example
```ts
const countiesInCalifornia = counties.in('CA').res();
const countiesWithLos = countiesInCalifornia.filter(
  ([fips, data]) => data.name.includes('Los')
);
```
:::

## Custom Data
You can also import the default `Counties` class and specificy your own data, along with some helpful methods.

```ts
import Counties from '@nickgraffis/us-counties';
const contiguous = new Counties({ contiguousOnly: true });

contiguous.get('06037'); // { fips: '06037', name: 'San Francisco', state: 'CA' }
```

### All Options
```ts
const counties = new Counties({
  include: ['CA', 'NY'], // Only include counties in these states
  exclude: ['CA', 'NY'], // Exclude counties in these states
  contiguousOnly: false, // Whether or not to only include contiguous counties. Defaults to false.
  plugins: [], // An array of plugins to use
});
```

## Plugins
In an effort to keep the core package as small as possible, we've created an easy way to add functionality to the `Counties` class. You can create your own plugin, or use one of the ones we've created. Learn more about plugins [here](plugins).

## Typescript
The package is written in Typescript, and the types are included in the package.

```ts
import { counties, USCounty } from '@nickgraffis/us-counties';

const county: USCounty = counties.get('06037');
```

