import fs from 'fs';
import kml from 'parse-kml';
import Spinnies from 'spinnies';

function numberToLetters(number) {
  // 0 = a, 1 = b, 2 = c, etc.
  number = number.toString();
  let letters = '';
  for (let i = 0; i < number.length; i++) {
    letters += String.fromCharCode(
      97 + parseInt(number[i])
    );
  }
  return letters;
}

const contiguos = [
  'AL',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
  'DC',
];

let indexFile = '';

const spinnies = new Spinnies();
spinnies.add('load', { text: 'Loading data...' });
const counties = await kml.toJson(
  './data/counties_2021.kml'
);
let states = new Map();
let map = new Map();
for (let i = 0; i < counties.features.length; i++) {
  const county = counties.features[i];
  map.set(county.properties.GEOID, {
    n: county.properties.NAME,
    s: county.properties.STUSPS,
    c: contiguos.includes(county.properties.STUSPS)
      ? 't'
      : 'f',
  });
  if (!states.has(county.properties.STUSPS)) {
    states.set(
      county.properties.STUSPS,
      county.properties.STATE_NAME
    );
  }
  fs.writeFileSync(
    `./data/polygons/${county.properties.GEOID}.json`,
    JSON.stringify({
      type: 'Feature',
      geometry: county.geometry,
      properties: (() => {
        const props = county.properties;
        delete props.name;
        delete props.description;
        props.id = props.GEOID;
      })(),
    })
  );
  indexFile += `import _${numberToLetters(
    county.properties.GEOID
  )} from './polygons/${
    county.properties.GEOID
  }.json' assert { type: 'json' };\nexport const ${numberToLetters(
    county.properties.GEOID
  )} = _${numberToLetters(county.properties.GEOID)};\n`;
}
fs.writeFileSync(
  './data/counties.json',
  JSON.stringify(Array.from(map.entries()))
);

fs.writeFileSync(
  './data/states.json',
  JSON.stringify(Array.from(states.entries()))
);

fs.writeFileSync('./data/index.ts', indexFile);
spinnies.succeed('load', { text: 'Data loaded' });

// GeoJson
const geojson = await fetch(
  'https://raw.githubusercontent.com/nickgraffis/geojson-us-counties/main/counties.json'
);
const geojsonCounties = await geojson.json();
geojsonCounties.features.forEach((county) => {
  const id = county.properties.GEOID;
  fs.writeFile(
    `./data/geojson/${id}.json`,
    JSON.stringify(county),
    () => {}
  );
});

for (let i = 0; i < 52; i++) {
  const state = {
    type: 'FeatureCollection',
    features: [],
  };

  for (
    let j = 0;
    j < geojsonCounties.features.length;
    j++
  ) {
    const county = geojsonCounties.features[j];
    if (county.properties.STUSPS === states[i]) {
      state.features.push(county);
    }
  }
}
