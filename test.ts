import { USCounties } from '.';

const counties = new USCounties();
counties.contains('san');
console.log(counties.toArray());
