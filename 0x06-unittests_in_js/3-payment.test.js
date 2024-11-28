/* eslint-disable no-unused-expressions */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./3-payment');

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

    it('logs correct on NaN', () => {
      const consoleSpy = sinon.spy(console, 'log');

      sendPaymentRequestToAPI(10, 'Thirty');

      expect(consoleSpy.calledOnce).to.be.true;

      expect(consoleSpy.calledWith('The toal is: NaN')).to.be.true;

      consoleSpy.restore();
    });
  });
});
