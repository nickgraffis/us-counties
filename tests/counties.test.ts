import { describe, test, expect } from 'vitest';
import {
  USCounties,
  getCountyByFips,
  getCountyByNameIncludes,
  getCountyByNameStartsWith,
  getCountyByState,
  counties,
  countiesdata,
  statesdata,
} from '..';

describe.concurrent('Test legacy code', () => {
  test('getCountyByFips', () => {
    const SF = getCountyByFips('06075');
    expect(SF).toBeInstanceOf(Object);
    expect(SF?.name).toBe('San Francisco');
    expect(SF?.state).toBe('California');
  });

  test('getCountyByNameIncludes', () => {
    const map = getCountyByNameIncludes('San');
    expect(map).toBeInstanceOf(Array);
    console.log(map.length);
    expect(map.length).toBe(35);
    expect(map[0].name).toBe('Santa Cruz');
  });

  test('getcountyByNameStartsWith', () => {
    const map = getCountyByNameStartsWith('Los');
    expect(map).toBeInstanceOf(Array);
    console.log(map.length);
    expect(map.length).toBe(2);
    expect(map[0].name).toBe('Los Angeles');
  });

  test('getCountyByState', () => {
    const map = getCountyByState('California');
    expect(map).toBeInstanceOf(Array);
    expect(map.length).toBe(58);
    expect(map[0].name).toBe('Alameda');
  });
});

describe.concurrent('The counties function', () => {
  test('Test the counties function class', () => {
    expect(counties()).toBeInstanceOf(USCounties);
  });

  test('Get a county', () => {
    const SF = counties().get('06075');
    expect(SF).toBeInstanceOf(Object);
    expect(SF?.name).toBe('San Francisco');
    expect(SF?.state).toBe('California');
  });
});

describe.concurrent('Test the counties class', () => {
  test('Test the counties class', () => {
    const counties = new USCounties();
    expect(counties).toBeInstanceOf(USCounties);
  });

  test('Get a county', () => {
    const counties = new USCounties();
    const SF = counties.get('06075');
    expect(SF).toBeInstanceOf(Object);
    expect(SF?.name).toBe('San Francisco');
    expect(SF?.state).toBe('California');
  });

  test('Get a county by name', () => {
    const counties = new USCounties();
    const map = counties.find('San Francisco').result;
    const [SF] = map.values();
    expect(SF).toBeInstanceOf(Object);
    expect(SF?.name).toBe('San Francisco');
    expect(SF?.state).toBe('California');
  });

  test('Get counties by state', () => {
    const counties = new USCounties();
    let map: any = counties.find('California', 'state');
    expect(map).toBeInstanceOf(USCounties);
    expect(map.length).toBe(58);
    map = map.result;
    const [Alameda] = map.values();
    expect(Alameda).toBeInstanceOf(Object);
    expect(Alameda?.name).toBe('Alameda');
    expect(Alameda?.state).toBe('California');
  });

  test('Get counties by state abv', () => {
    const counties = new USCounties();
    let map: any = counties.find('CA', 'stateAbbr');
    expect(map).toBeInstanceOf(USCounties);
    expect(map.length).toBe(58);
    map = map.result;
    const [Alameda] = map.values();
    expect(Alameda).toBeInstanceOf(Object);
    expect(Alameda?.name).toBe('Alameda');
    expect(Alameda?.state).toBe('California');
  });

  test('Group by state', () => {
    const counties = new USCounties();
    const map = counties.groupBy('stateAbbr');
    expect(map).toBeInstanceOf(USCounties);
    expect(map.group('CA').length).toBe(58);
    expect(map.group('CA').result.get('06001')?.name).toBe(
      'Alameda'
    );
    expect(map.group('CA').get('06075')?.name).toBe(
      'San Francisco'
    );
  });

  test('Contains', () => {
    const counties = new USCounties();
    const map = counties.contains('San');
    expect(map).toBeInstanceOf(USCounties);
    expect(map.length).toBe(35);
  });

  test('Contains in state', () => {
    const counties = new USCounties();
    const ca = counties.in('California');
    const map = ca.contains('San');
    expect(map).toBeInstanceOf(USCounties);
    expect(map.length).toBe(10);
  });

  test('Only contigous states', () => {
    const counties = new USCounties({
      contiguousOnly: true,
    });
    expect(counties).toBeInstanceOf(USCounties);
    expect(counties.length).toBe(3108);
  });

  test('Only include a few states', () => {
    const counties = new USCounties({
      include: ['CA', 'TX'],
    });
    expect(counties).toBeInstanceOf(USCounties);
    expect(counties.length).toBe(312);
  });

  test('Only exclude a few states', () => {
    const counties = new USCounties({
      exclude: ['CA', 'TX'],
    });
    expect(counties).toBeInstanceOf(USCounties);
    expect(counties.length).toBe(2909);
  });

  test('Filtering tests', () => {
    const counties = new USCounties();
    const map = counties.in('California').contains('San');
    expect(map).toBeInstanceOf(USCounties);
    expect(map.length).toBe(10);
    expect(map.get('06075')?.name).toBe('San Francisco');
    const San = map.where('name', 'beginsWith', 'San');
    expect(San.length).toBe(10);
    const SF = San.where('name', '===', 'San Francisco');
    expect(SF.length).toBe(1);
  });
});

describe.concurrent('Test the counties raw data', () => {
  test('Test the counties raw data', () => {
    expect(countiesdata).toBeInstanceOf(Array);
  });
});

describe.concurrent('Test the states class', () => {
  test('get states data', () => {
    const states = statesdata;
    expect(states).toBeInstanceOf(Array);
    expect(states.length).toBe(52);
  });
});
