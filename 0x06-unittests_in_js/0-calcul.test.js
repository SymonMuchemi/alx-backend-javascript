const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe("calculateNumber", function() {
    it("calculates whole number correctly", () => {
        const result = calculateNumber(2, 2);

        assert.strictEqual(result, 4)
    });

    it('rounds up whole number correctly', () => {
        const result = calculateNumber(2.5, 2.1);

        assert.strictEqual(result, 6);
    });
})
