/* eslint-disable no-unused-expressions */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./3-payment');
const Utils = require('./utils');

describe('send payment to API module', () => {
  describe('logged message', () => {
    it('should log correct message', () => {
      const consoleSpy = sinon.spy(console, 'log');

      sendPaymentRequestToAPI(10, 10);

      expect(consoleSpy.calledOnce).to.be.true;

      expect(consoleSpy.calledWith('The toal is: 20')).to.be.true;

      consoleSpy.restore();
    });

    it('logs correct on negatives', () => {
      const consoleSpy = sinon.spy(console, 'log');

      sendPaymentRequestToAPI(10, -10);

      expect(consoleSpy.calledOnce).to.be.true;

      expect(consoleSpy.calledWith('The toal is: 0')).to.be.true;

      consoleSpy.restore();
    });

    it('logs correct on floats', () => {
      const consoleSpy = sinon.spy(console, 'log');

      sendPaymentRequestToAPI(10.5, 2.4);

      expect(consoleSpy.calledOnce).to.be.true;

      expect(consoleSpy.calledWith('The toal is: 13')).to.be.true;

      consoleSpy.restore();
    });

    it('logs correct on small floats', () => {
      const consoleSpy = sinon.spy(console, 'log');

      sendPaymentRequestToAPI(0.5, 0.4);

      expect(consoleSpy.calledOnce).to.be.true;

      expect(consoleSpy.calledWith('The toal is: 1')).to.be.true;

      consoleSpy.restore();
    });

    it('logs correct on NaN', () => {
      const consoleSpy = sinon.spy(console, 'log');

      sendPaymentRequestToAPI(10, 'Thirty');

      expect(consoleSpy.calledOnce).to.be.true;

      expect(consoleSpy.calledWith('The toal is: NaN')).to.be.true;

      consoleSpy.restore();
    });
  });
  describe('uses the calculate function in utils module', () => {
    it('uses the calculate function', () => {
      const funcSpy = sinon.spy(Utils);

      sendPaymentRequestToAPI(10, 10);

      expect(funcSpy.calculateNumber.calledWith('SUM', 10, 10)).to.be.true;
      expect(funcSpy.calculateNumber.callCount).to.be.equal(1);

      funcSpy.calculateNumber.restore();
    });
  });
});
