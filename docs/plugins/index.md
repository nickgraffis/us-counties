# Plugins

## Using a Plugin

To use a plugin, you can install it and then use it by passing it to the constructor.

```ts
import Counties from '@nickgraffis/us-counties';
import { usCountiesAreaPlugin } from '@nickgraffis/us-counties-plugin-us-counties-area';

const counties = new Counties({
  plugins: [usCountiesAreaPlugin],
});

counties.get('64723'); 
// {
//   name: 'Los Angeles',
//   FIPS: '64723',
//   state: 'CA',
//   landArea: 408474,
//   waterArea: 0,
// }
```

## Typescript
If the plugin exports a type, you can pass it to the constructor to get type checking.

```ts
import Counties from '@nickgraffis/us-counties';
import { usCountiesAreaPlugin, UsCountiesAreaPluginType } from '@nickgraffis/us-counties-plugin-us-counties-area';

const counties = new Counties<UsCountiesAreaPluginType>({
  plugins: [usCountiesAreaPlugin],
});
```

## Create a Plugin
A plugin is an object that contins `data` and/or `methods`, and/or `keyMap`, that will be added to the `Counties` class.

### Data
Data needs to be a serialized Map of FIPS codes to data objects. The data objects do not need to include the properties already included in the `Counties` class, and if they do, they will be overwritten.

::: tip
The order that you include your plugins, is the order that their data and methods will be applied; so last plugin wins.
:::

The `keyMap` field represents an object that can map the name of the keys in your serialized data, to the name you would like displayed. The idea behind this is so that you can save space on the actual data, then have the data be more readable when used.

```ts
import { USCountiesPlugin } from "@nickgraffis/us-counties";

export const plugin: USCountiesPlugin = {
  data: serializedMap,
  keyMap: {
    al: 'areaLand',
    aw: 'areaWater',
    pd: 'populationDensity',
  },
}

export default plugin;
```

### Methods

Methods are functions that will be added to the `Counties` class. The methods will be bound to the `Counties` instance, so you can use `this` to access the instance.

```ts
import USCounties, { USCountiesPlugin } from "@nickgraffis/us-counties";

export const plugin: USCountiesPlugin = {
  methods: {
    polygons() {
      const typedThis = this as USCounties
      return Promise.all([...typedThis.all()].map(async ([key, county]) => {
        const res = await fetch(`https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips/${key}.json`);
        const data = await res.json();
        const countyPolygons = data.features.filter((feature: any) => feature.id === county.FIPS);
        return countyPolygons;
      }))
    },
  }
}

export default plugin;
```

This is an example of the `usCountiesPolygonsPlugin` plugin. It adds a method to the `Counties` class that returns an array of geo polygons for each county.