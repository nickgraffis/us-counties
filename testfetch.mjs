const start = Date.now();
const res = await fetch('https://raw.githubusercontent.com/nickgraffis/geojson-us-counties/main/counties.json')
const counties = await res.json();
const end = Date.now();
console.log(`Took ${end - start}ms to fetch data`);