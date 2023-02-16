import { USCounties } from './dist/index.mjs';

const counties = new USCounties();
counties.contains('Los');
const matches = counties.length > 10 ? 10 : counties.length;
console.log('matches', matches, counties.res(matches));
