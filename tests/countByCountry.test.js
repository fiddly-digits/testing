import { describe, expect, expectTypeOf, test } from 'vitest';
import countByCountry from '../katas/countByCountry.mjs';

describe('Count Artist Top by Country', () => {
  test('is a function', () => {
    expectTypeOf(countByCountry).toBeFunction();
  });

  test('Should return Type Object', () => {
    expectTypeOf(
      countByCountry([{ artist: 'Radiohead', country: 'United Kingdom' }])
    ).toBeObject();
  });

  test('Should fail when type is not Array', () => {
    expect(() => countByCountry(123)).toThrowError();
    expect(() => removeVowels('a')).toThrowError();
    expect(() => removeVowels(false)).toThrowError();
    expect(() => removeVowels({ number: 1 })).toThrowError();
    expect(() => removeVowels(null)).toThrowError();
  });
});
