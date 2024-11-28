const calculateNumber = require('./2-calcul_chai')

describe("Calculate number", () => {
  let expect;
  
  before(async () => {
      const chai = await import('chai');
      expect = chai.expect;
  });

  describe("Rounding behaviour on decimal numbers just below and above the rounding threshold", () => {
    it("Summation on positives", () => {
      expect(calculateNumber("SUM", 0.4, 0.5)).to.equal(1);
    });
    it("Summation on negatives", () => {
      expect(calculateNumber("SUM", -0.4, -0.5)).to.equal(0);
    });
    it("division on postives", () => {
      expect(calculateNumber("DIVIDE", 0.5, 0.4)).to.equal("Error");
    });
    it("division on negatives", () => {
      expect(calculateNumber("DIVIDE", -0.5, -0.4)).to.equal("Error");
    });
  });

  describe("Negative scenarios", () => {
    it("should be -8", () => {
      expect(calculateNumber("SUBTRACT", -5, 3)).to.equal(-8);
    });
    it("should be -5", () => {
      expect(calculateNumber("DIVIDE", -10, 2)).to.equal(-5);
    });
  });

  describe("Zero handling", () => {
    it("should be 5", () => {
      expect(calculateNumber("SUBTRACT", 5, 0)).to.equal(5);
    });
    it("Should be 0", () => {
      expect(calculateNumber("SUM", 0, 0)).to.equal(0);
    });
    it("should return 'Error'", () => {
      expect(calculateNumber("DIVIDE", 10, 0)).to.equal("Error");
    });
  });

  describe("Floating point cases", () => {
    it("should be 0", () => {
      expect(calculateNumber("SUM", 0.1, 0.2)).to.equal(0);
    });
    it("should be 0", () => {
      expect(calculateNumber("DIVIDE", 1, 3)).to.equal(0.3333333333333333);
    });
  });

  describe("Negative zero", () => {
    it("Handles -0", () => {
      expect(calculateNumber("SUBTRACT", 0, 0)).to.equal(0);
    });
  });

  describe("Invalid/extreme", () => {
    it("sum with infinity", () => {
      expect(calculateNumber("SUM", Infinity, 0)).to.equal(Infinity);
    });
    it("Divide with NaN", () => {
      expect(calculateNumber("DIVIDE", NaN, 2)).to.be.NaN;
    });
    it("Handle INVALID type", () => {
      expect(calculateNumber("INVALID", 5, 10)).to.equal("Error");
    });
  });
});
