import { parse } from 'csv-parse/sync';
import fs from 'fs';

const input = fs.readFileSync('data/co-est2021-alldata.csv', 'utf8');
const records = parse(input, {
  columns: true,
  skip_empty_lines: true
});

const map = new Map();

for (const record of records) {
  const { 
    STATE: state,
    COUNTY: FIPS, 
    POPESTIMATE2020: population2020,
    POPESTIMATE2021: population2021,
    NPOPCHG2020: populationChange2020,
    NPOPCHG2021: populationChange2021, 
    BIRTHS2020: births2020,
    BIRTHS2021: births2021,
    DEATHS2020: deaths2020,
    DEATHS2021: deaths2021,
    NATURALCHG2020: naturalChange2020,
    NATURALCHG2021: naturalChange2021,
    INTERNATIONALMIG2020: internationalMigrants2020,
    INTERNATIONALMIG2021: internationalMigrants2021,
    DOMESTICMIG2020: domesticMigrants2020,
    DOMESTICMIG2021: domesticMigrants2021,
    NETMIG2020: netMigrants2020,
    NETMIG2021: netMigrants2021,
    RESIDUAL2020: residual2020,
    RESIDUAL2021: residual2021,
    RBIRTH2021: rateBirths2021,
    RDEATH2021: rateDeaths2021,
    RINTERNATIONALMIG2021: rateInternationalMigrants2021,
    RDOMESTICMIG2021: rateDomesticMigrants2021,
    RNETMIG2021: rateNetMigrants2021
  } = record;
  map.set(`${state}${FIPS}`, {
    p20: population2020,
    p21: population2021,
    pc20: populationChange2020,
    pc21: populationChange2021,
    b20: births2020,
    b21: births2021,
    d20: deaths2020,
    d21: deaths2021,
    nc20: naturalChange2020,
    nc21: naturalChange2021,
    im20: internationalMigrants2020,
    im21: internationalMigrants2021,
    dm20: domesticMigrants2020,
    dm21: domesticMigrants2021,
    nm20: netMigrants2020,
    nm21: netMigrants2021,
    r20: residual2020,
    r21: residual2021,
    rb21: rateBirths2021,
    rd21: rateDeaths2021,
    rim21: rateInternationalMigrants2021,
    rdm21: rateDomesticMigrants2021,
    rnm21: rateNetMigrants2021
  });
  console.log(`${state}${FIPS}`, map.get(`${state}${FIPS}`));
}

fs.writeFileSync('data/us-counties-plugin-population.json', JSON.stringify(Array.from(map)));
