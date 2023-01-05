# US Counties Plugin Population

This plugin adds population data to the [US Counties]() lib.

## Installation and Usage

```bash
yarn add @nickgraffis/us-counties-plugin-population
```

If you are using typescript you can import the `CountyPopulationData` type.

```ts
import USCounties from '@nickgraffis/us-counties';
import usCountiesPluginPopulation, { CountyPopulationData } from '@nickgraffis/us-counties-plugin-population';

const counties = new USCounties<CountyPopulationData>({
  plugins: [usCountiesPluginPopulation],
});

const county = counties.get('06001');
console.log(county.population2021);
```

### Methods

The plugin adds one method to the `Counties` class.

#### `sortByPopulation()`
Returns the `Counties` instance sorted by population 2021.

```ts
const counties = new USCounties<CountyPopulationData>({
  plugins: [usCountiesPluginPopulation],
});

const sortedCounties = counties.sortByPopulation();
```

## Raw Data and Sources

The data comes from the [US Census Bureau](https://www.census.gov). 

More info on the population data can be found [here](https://www2.census.gov/programs-surveys/popest/technical-documentation/file-layouts/2020-2021/CO-EST2021-ALLDATA.pdf).

You can import the raw serialized data as `countiespopulationdata`. And if you are using typescript you may want to import the `SerializedData` type.

```ts
import { countiespopulationdata, SerializedData } from '@nickgraffis/us-counties-plugin-population';

const map = new Map(countiespopulationdata as SerializedData);
```
