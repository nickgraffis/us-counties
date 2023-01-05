import { describe, test, expect } from 'vitest';
import { USCounties } from '..';

describe('Test the counties class', () => {
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
    expect(map.group('CA').result.get('06001')?.name).toBe('Alameda');
    expect(map.group('CA').get('06075')?.name).toBe('San Francisco');
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
});
