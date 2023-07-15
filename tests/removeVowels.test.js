import { describe, expect, expectTypeOf, test } from 'vitest';
import removeVowels from '../katas/removeVowels.mjs';

describe('Remove Vowels', () => {
  test('is a function', () => {
    expectTypeOf(removeVowels).toBeFunction();
  });

  test('Should return String', () => {
    expectTypeOf(removeVowels('DEVELOPER')).toBeString();
  });

  test('Should have no vowels', () => {
    expect(removeVowels('kodemia')).toBe('kdm');
    expect(removeVowels('javascript')).toBe('jvscrpt');
    expect(removeVowels('DEVELOPER')).toBe('DVLPR');
    expect(removeVowels('LNX')).toBe('LNX');
  });

  test('Should fail when type is not string', () => {
    expect(() => removeVowels(123)).toThrowError();
    expect(() => removeVowels(false)).toThrowError();
    expect(() => removeVowels([1])).toThrowError();
    expect(() => removeVowels({ number: 1 })).toThrowError();
    expect(() => removeVowels(null)).toThrowError();
  });
});
