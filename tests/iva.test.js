import { describe, expect, expectTypeOf, test } from 'vitest';
import iva from '../katas/iva.mjs';

describe('Kata Iva', () => {
  test('is a function', () => {
    expectTypeOf(iva).toBeFunction();
  });

  test('Should return 16% of the given value', () => {
    expect(iva(100)).toBe(16);
    expect(iva(0)).toBe(0);
    expect(iva(200)).toBe(32);
  });

  test('Should return number', () => {
    expectTypeOf(iva('100')).toBeNumber();
  });

  test('To fail when the value is different to number', () => {
    expect(() => iva('a')).toThrowError();
    expect(() => iva(false)).toThrowError();
    expect(() => iva([1])).toThrowError();
    expect(() => iva({ number: 1 })).toThrowError();
    expect(() => iva(null)).toThrowError();
  });
});
