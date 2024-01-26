import {describe, it, expect} from '@jest/globals'
import mergeModule from './merge';

const { merge } = mergeModule;


describe('merge', () => {
  it('case1 : equal length inputs', () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [2, 4, 6, 8, 10];

    const result = merge(collection1, collection2);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(result).toEqual(expected);
  });

  it('case2.1 : collection1 is empty', () => {
    const collection1 = [];
    const collection2 = [2, 4, 6, 8, 10];

    const result = merge(collection1, collection2);
    const expected = [2, 4, 6, 8, 10];

    expect(result).toEqual(expected);
  });

  it('case2.2 : collection2 is empty', () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [];

    const result = merge(collection1, collection2);
    const expected = [1, 3, 5, 7, 9];

    expect(result).toEqual(expected);
  });

  it('case3 : not equal length', () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [2, 4, 6];

    const result = merge(collection1, collection2);
    const expected = [1, 2, 3, 4, 5, 6, 7, 9];

    expect(result).toEqual(expected);
  });

  it('case4 : negative number', () => {
    const collection1 = [-9, -7, -5, -3, -1];
    const collection2 = [-10, -8, -6, -4, -2];

    const result = merge(collection1, collection2);
    const expected = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];

    expect(result).toEqual(expected);
  });

});
