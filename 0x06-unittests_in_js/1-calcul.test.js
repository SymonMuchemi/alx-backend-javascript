const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Calculate number', () => {
    describe('Rounding behaviour on decimal numbers just below and above the rounding threshold', () => {
        it('Summation on positives', () => {
            assert.strictEqual(calculateNumber('SUM', 0.4, 0.5), 1)
        });
        it('Summation on negatives', () => {
            assert.strictEqual(calculateNumber('SUM', -0.4, -0.5), 0)
        });
        it('division on postives', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.5, 0.4), 'Error')
        });
        it('division on negatives', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -0.5, -0.4), 'Error')
        });
    });

    describe('Negative scenarios', () => {
        it('should be -8', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -5, 3), -8);
        });
        it('should be -5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -10, 2), -5);
        });
    });

    describe('Zero handling', () => {
        it('should be 5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5, 0), 5)
        });
        it('Should be 0', () => {
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0)
        });
        it("should return 'Error'", () => {
            assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
        });
    });

    describe('Floating point cases', () => {
        it('should be 0', () => {
            assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0)
        });
        it('should be 0', () => {
            assert.equal(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333)
        });
    });

    describe('Negative zero', () => {
        it('Handles -0', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0)
        });
    });

    describe('Invalid/extreme', () => {
        it('sum with infinity', () => {
            assert.strictEqual(calculateNumber('SUM', Infinity, 0), Infinity);
        });
        it('Divide with NaN', () => {
            assert.strictEqual(calculateNumber('DIVIDE', NaN, 2), NaN)
        });
        it('Handle INVALID type', () => {
            assert.strictEqual(calculateNumber('INVALID', 5, 10), 'Error')
        })
    });

})
