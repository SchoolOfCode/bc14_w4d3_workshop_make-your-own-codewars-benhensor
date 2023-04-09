//👉 Write your tests below here:

import { test, expect } from '@jest/globals';

import { doubleTrouble } from './main.js';

// Test suite for doubleTrouble function
describe('doubleTrouble', () => {

// Test case 1: Check if the function returns an array
test('should return an array', () => {
  const arr = [4, 2, 5];
  const result = doubleTrouble(arr);
  const isArray = Array.isArray(result);
  expect(isArray).toBe(true);
  console.log(isArray);
});

// Test case 2: Check if the doubled values are correct
test('should double the values in an array', () => {
  const arr = [3, 4, 2];
  const result = doubleTrouble(arr);
  expect(result).toEqual([6, 8, 4]);
  console.log(result);
});

// Test case 3: Check if values greater than or equal to 10 are split correctly
test('should split values equal to or greater than 10 into separate values', () => {
  const arr = [7, 6, 8];
  const result = doubleTrouble(arr);
  expect(result).toEqual([1, 4, 1, 2, 1, 6]);
  console.log(result);
});

// Test case 4: Check if values less than 10 are not split
it('should not split values less than 10', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = doubleTrouble(arr);
  expect(result).toEqual([2, 4, 6, 8, 1, 0]);
  console.log(result);
});

// Test case 5: Check if the function handles edge case of empty array correctly
it('should return an empty array when given an empty array', () => {
  const arr = [];
  const result = doubleTrouble(arr);
  expect(result).toEqual([]);
  console.log(result);
});

// Test case 6: Check if the function handles edge case of array with only 0 correctly
it('should return [0] when given an array with only 0', () => {
  const arr = [0];
  const result = doubleTrouble(arr);
  expect(result).toEqual([0]);
  console.log(result);
});
});