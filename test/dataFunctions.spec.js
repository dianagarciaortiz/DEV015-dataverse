import { filterData, filterDatas, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('filterDatas', () => {

  it('returns `3` cuando filtramos por matematicas', () => {
    expect(filterDatas(fakeData, "Matemáticas").length).toBe(3);
  });
});

describe('filterData', () => {

  it('returns `1` cuando escribimos sheryl', () => {
    expect(filterData(fakeData, "sheryl").length).toBe(1);
  });
});

describe('sortData', () => {

  it('returns `24` datos cuando filtramos de z a la a', () => {
    expect(sortData(fakeData, "za").length).toBe(24);
  });
});

describe('sortData', () => {

  it('returns `24` datos cuando filtramos de a a la z', () => {
    expect(sortData(fakeData, "za").length).toBe(24);
  });
});