import USCounties, { USCountiesPlugin } from '../../src';
import { County } from '../../src/types';
import _countypopulationdata from './data/us-counties-plugin-population.json' assert { type: 'json' };

export const countypopulationdata = _countypopulationdata as unknown as Record<string, SerializedData>;
export type SerializedData = {
  p20: number;
  p21: number;
  pc20: number;
  pc21: number;
  b20: number;
  b21: number;
  d20: number;
  d21: number;
  nc20: number;
  nc21: number;
  im20: number;
  im21: number;
  dm20: number;
  dm21: number;
  nm20: number;
  nm21: number;
  r20: number;
  r21: number;
  rb20: number;
  rb21: number;
  rim21: number;
  rdm21: number;
  rnm21: number;
};

export type CountyPopulationData = {
  population2020: number;
  population2021: number;
  populationChange2020: number;
  populationChange2021: number;
  births2020: number;
  births2021: number;
  deaths2020: number;
  deaths2021: number;
  netChange2020: number;
  netChange2021: number;
  internationalMigration2020: number;
  internationalMigration2021: number;
  domesticMigration2020: number;
  domesticMigration2021: number;
  netMigration2020: number;
  netMigration2021: number;
  residual2020: number;
  residual2021: number;
  rateBirths2021: number;
  rateDeaths2021: number;
  rateInternationalMigration2021: number;
  rateDomesticMigration2021: number;
  rateNetMigration2021: number;
};

const plugin: USCountiesPlugin<SerializedData> = {
  keyMap: {
    p20: 'population2020',
    p21: 'population2021',
    pc20: 'populationChange2020',
    pc21: 'populationChange2021',
    b20: 'births2020',
    b21: 'births2021',
    d20: 'deaths2020',
    d21: 'deaths2021',
    nc20: 'naturalChange2020',
    nc21: 'naturalChange2021',
    im20: 'internationalMigrants2020',
    im21: 'internationalMigrants2021',
    dm20: 'domesticMigrants2020',
    dm21: 'domesticMigrants2021',
    nm20: 'netMigrants2020',
    nm21: 'netMigrants2021',
    r20: 'residual2020',
    r21: 'residual2021',
    rb21: 'rateBirths2021',
    rd21: 'rateDeaths2021',
    rim21: 'rateInternationalMigrants2021',
    rdm21: 'rateDomesticMigrants2021',
    rnm21: 'rateNetMigrants2021',
  },
  data: _countypopulationdata as [string, SerializedData][],
  methods: {
    sortByPopulation() {
      const typedThis = this as USCounties<CountyPopulationData>;
      const sorted = new Map<string, County<CountyPopulationData>>([...this.data].sort((a, b) => b[1].p21 - a[1].p21));
      typedThis.result = sorted;
    },
  },
};

export default plugin;
