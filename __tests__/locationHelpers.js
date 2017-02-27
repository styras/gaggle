import { getUserLocation, findCentroidFromArray } from '../location/locationHelpers';

describe('getUserLocation', () => {
  it('is a function', () => {
    expect(typeof getUserLocation).toBe('function');
  });
  it('returns a promise', () => {
    expect(typeof getUserLocation()).toBe('object');
  });
});

describe('findCentroidFromArray', () => {
  it('is a function', () => {
    expect(typeof findCentroidFromArray).toBe('function');
  });
  it('accepts a single array input', () => {
    expect(findCentroidFromArray.length).toBe(1);
  });
  it('returns an array', () => {
    const result = findCentroidFromArray([[1, 1]]);
    expect(Array.isArray(result)).toBe(true);
  });
  it('returns a Latitude number', () => {
    expect(typeof findCentroidFromArray([[1, 1]])[0]).toBe('number');
  });
  it('returns a Longitude number', () => {
    expect(typeof findCentroidFromArray([[1, 1]])[0]).toBe('number');
  });
  it('returns the same latitude longitude for an array with 1 latLng pair', () => {
    expect(findCentroidFromArray([[1, 1]])).toEqual([1, 1]);
  });
  it('returns the centroid for 2 latLng pairs', () => {
    const locations = [
      [-1.2, 5.1],
      [-1.3, 5.2],
    ];
    expect(findCentroidFromArray(locations)).toEqual([-1.25, 5.15]);
  });
  it('returns the centroid for 4 latLng pairs', () => {
    const locations = [
      [-1.2, 5.1],
      [-1.3, 5.2],
      [-1.8, 5.9],
      [-1.9, 5.8],
    ];
    expect(findCentroidFromArray(locations)).toEqual([-1.5499999999999998, 5.5]);
  });
});
