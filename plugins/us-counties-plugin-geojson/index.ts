import USCounties, { USCountiesPlugin } from "../..";

export const plugin: USCountiesPlugin = {
  methods: {
    async polygons() {
      const typedThis = this as USCounties
      let json;
      //@ts-ignore
      if (!typedThis.geojsondata) {
        const polygons = await fetch(`https://raw.githubusercontent.com/nickgraffis/geojson-us-counties/main/counties.json`);
        json = await polygons.json();
        //@ts-ignore
        typedThis.geojsondata = json;
      }
      const ret = {
        type: "FeatureCollection",
        features: json.features.filter(({ properties: { GEOID }}) => {
          return typedThis.counties.has(GEOID)
        }).map((feature: any) => {
          return {
            type: "Feature",
            geometry: feature.geometry,
            properties: (() => {
              const props = feature.properties
              delete props.name
              delete props.description
              props.id = props.GEOID
              return props
            })()
          }
        })
      }

      return ret
    },
  }
}

export default plugin;