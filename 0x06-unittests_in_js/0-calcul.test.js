/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('normal behavour', () => {
    it('calculates whole number correctly', () => {
      const result = calculateNumber(2, 2);

      assert.strictEqual(result, 4);
    });
  });

  describe('rounding behaviour', () => {
    it('both a and b as floating point numbers', () => {
      assert.strictEqual(calculateNumber(2.5, 2.3), 5);
    });

    it('with a as non-integer', () => {
      assert.strictEqual(calculateNumber(6.2, 5), 11);
    });

    it('with b as non-integer', () => {
      assert.strictEqual(calculateNumber(5, 2.1), 7);
    });
  });

  describe('with zero values', () => {
    it('calculates correctly with both a and b as zeros', () => {
      assert.strictEqual(calculateNumber(0, 0), 0);
    });
    it('calculates correctly with a as zeros', () => {
      assert.strictEqual(calculateNumber(0, 1.3), 1);
    });
    it('calculates correctly with b as zeros', () => {
      assert.strictEqual(calculateNumber(5.2, 0), 5);
    });
  });

  describe('with negative values', () => {
    it('calculates correctly with both a and b as negative integers', () => {
      assert.strictEqual(calculateNumber(-9, -1), -10);
    });
    it('calculates correctly with both a as a negative integers', () => {
      assert.strictEqual(calculateNumber(-9, 1), -8);
    });
    it('calculates correctly with both b as negative integers', () => {
      assert.strictEqual(calculateNumber(9, -1), 8);
    });
    it('calculates correctly with both a and be as negative floats', () => {
      assert.strictEqual(calculateNumber(-9.0, -1.0), -10);
    });
  });

  describe('with large values', () => {
    it('returns correct value with a and b as large integers', () => {
      assert.strictEqual(calculateNumber(10 ** 10, 10 ** 20), 100000000010000000000);
    });
    it('returns correct value with a and b as larger complex integers', () => {
      assert.strictEqual(calculateNumber(10 ** 10.1, 10 ** 20), 100000000012589250000);
    });
  });

  describe('with smaller numbers - close to zero', () => {
    it('returns correct value with small positive values', () => {
      assert.strictEqual(calculateNumber(0.1, 0.4), 0);
    });

    it('returns correct value with small negative values', () => {
      assert.strictEqual(calculateNumber(-0.1, -0.4), 0);
    });
  });

  describe('with single large positive and single large negative', () => {
    it('returns correct value on positive value', () => {
      assert.strictEqual(calculateNumber(10 ** 10, 10 ** 10), 20000000000);
    });
  });
});
