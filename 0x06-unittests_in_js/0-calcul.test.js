const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe("calculateNumber", function() {
    describe('Normal behavour', () => {
        it("calculates whole number correctly", () => {
            const result = calculateNumber(2, 2);
    
            assert.strictEqual(result, 4)
        });
    });

    describe('Rounding behaviour', () => {    
        it('both a and b as floating point numbers', () => {
            assert.strictEqual(calculateNumber(2.5, 2.3), 6);
        });
    
        it('with a as non-integer', () => {
            assert.strictEqual(calculateNumber(6.2, 5), 12);
        });
    
        it('with b as non-integer', () => {
            assert.strictEqual(calculateNumber(5, 2.1), 8);
        })
    });

    describe("With zero values", () => {
        it('calculates correctly with both a and b as zeros', () => {
            assert.strictEqual(calculateNumber(0, 0), 0);
        })
        it('calculates correctly with a as zeros', () => {
            assert.strictEqual(calculateNumber(0, 1.3), 2);
        })
        it('calculates correctly with b as zeros', () => {
            assert.strictEqual(calculateNumber(5.2, 0), 6);
        })
    });

    describe('With negative values', () => {
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

    describe('With large values', () => {
        it('Returns correct value with a and b as large integers', () => {
            assert.strictEqual(calculateNumber(10^10, 10^20), 10^20);
        });
        it('Returns correct value with a and b as larger complex integers', () => {
            assert.strictEqual(calculateNumber(10^10.1, 10^20), 1.00461579*10^20);
        });
    });

    describe('With smaller numbers - close to zero', () => {
        it('returns correct value with small positive values', () => {
            assert.strictEqual(calculateNumber(0.1, 0.4), 2);
        });
        
        it('returns correct value with small negative values', () => {
            assert.strictEqual(calculateNumber(-0.1, -0.4), 0);
        });
    });

    describe('With single large positive and single large negative', () => {
        it('returns correct value on positive value', () => {
            assert.strictEqual(calculateNumber(10^10, 10^10), 0)
        });
    });

    describe('With NaN values', () => {
        it('returns NaN when a is NaN', () => {
            assert.strictEqual(isNaN(calculateNumber(NaN, 2)), true);
        });

        it('returns NaN when b is NaN', () => {
            assert.strictEqual(isNaN(calculateNumber(2, NaN)), true);
        });

        it('returns NaN when both a and b are NaN', () => {
            assert.strictEqual(isNaN(calculateNumber(NaN, NaN)), true);
        });
    });

    describe('With non-integer/float values', () => {
        it('returns NaN when a is a string', () => {
            assert.strictEqual(isNaN(calculateNumber("string", 2)), true);
        });

        it('returns NaN when b is a string', () => {
            assert.strictEqual(isNaN(calculateNumber(2, "string")), true);
        });

        it('returns NaN when both a and b are strings', () => {
            assert.strictEqual(isNaN(calculateNumber("string", "string")), true);
        });

        it('returns NaN when a is an object', () => {
            assert.strictEqual(isNaN(calculateNumber({}, 2)), true);
        });

        it('returns NaN when b is an object', () => {
            assert.strictEqual(isNaN(calculateNumber(2, {})), true);
        });

        it('returns NaN when both a and b are objects', () => {
            assert.strictEqual(isNaN(calculateNumber({}, {})), true);
        });

        it('returns NaN when a is an array', () => {
            assert.strictEqual(isNaN(calculateNumber([], 2)), true);
        });

        it('returns NaN when b is an array', () => {
            assert.strictEqual(isNaN(calculateNumber(2, [])), true);
        });

        it('returns NaN when both a and b are arrays', () => {
            assert.strictEqual(isNaN(calculateNumber([], [])), true);
        });

        it('returns NaN when a is a boolean', () => {
            assert.strictEqual(isNaN(calculateNumber(true, 2)), true);
        });

        it('returns NaN when b is a boolean', () => {
            assert.strictEqual(isNaN(calculateNumber(2, true)), true);
        });

        it('returns NaN when both a and b are booleans', () => {
            assert.strictEqual(isNaN(calculateNumber(true, true)), true);
        });
    });
})
