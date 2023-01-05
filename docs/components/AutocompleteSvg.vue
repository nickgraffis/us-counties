<script setup lang="ts">
// import * as d3 from 'd3'
// import { onMounted } from 'vue';
// import { USCounties } from '../..'
// import usCountiesPolygonPlugin from '../../plugins/us-counties-plugin-geojson'

// onMounted(async () => {
//   const counties = new USCounties({
//     plugins: [usCountiesPolygonPlugin]
//   });
//   //@ts-ignore
//   let geojson = await counties.find('Orange').polygons()
//   geojson.features[0].geometry.coordinates = geojson.features[0].geometry.coordinates.map((coords) => {
//     return coords.map(coord => {
//       return [coord[0], coord[1]]
//     })
//   })
//   console.log(geojson.features)
//   let projection = d3.geoMercator().scale(150).fitSize([500, 500], geojson)
//   let geoGenerator = d3.geoPath()
//     .projection(projection);

//     d3.select('#content g.map')
//       .selectAll('path')
//       .data(geojson.features)
//       .enter()
//       .append('path')
//       .attr('d', geoGenerator);
// })

</script>

<template>
  <!-- <h3>🏝️ Welcome to Los Angeles</h3>
  <div id="content">
    <svg width="800px" height="400px">
      <g class="map"></g>
    </svg>
  </div> -->
</template>

<style scoped>
.map path {
  fill: none;
  stroke: red;
}
</style>