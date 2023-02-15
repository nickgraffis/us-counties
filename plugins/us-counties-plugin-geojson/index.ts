import { USCountiesPlugin, USCounties } from '../..';

export const plugin: USCountiesPlugin = {
  methods: {
    async polygons() {
      const typedThis: USCounties<{ geojson: string }> =
        this;
      let json;
      let polygons = {};
      let polygonPromises: Promise<any>[] = [];
      typedThis.result.forEach((county, FIPS) => {
        polygonPromises.push(
          fetch(
            `https://raw.githubusercontent.com/nickgraffis/us-counties/main/data/geojson/${FIPS}.geojson`
          ).then((res) => res.json())
        );
      });

      json = await Promise.all(polygonPromises);
      json.forEach((geojson) => {
        polygons[geojson.features[0].properties.GEOID] =
          geojson;
      });

      const ret = {
        type: 'FeatureCollection',
        features: json.features
          .filter(({ properties: { GEOID } }) => {
            return typedThis.counties.has(GEOID);
          })
          .map((feature: any) => {
            return {
              type: 'Feature',
              geometry: feature.geometry,
              properties: (() => {
                const props = feature.properties;
                delete props.name;
                delete props.description;
                props.id = props.GEOID;
                return props;
              })(),
            };
          }),
      };

      return ret;
    },
  },
};

export default plugin;
