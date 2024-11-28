/* eslint-disable jest/no-hooks */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');
const Utils = require('./utils');

describe('test with hooks', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('return correctly with 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);

    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('returns correctly with 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);

    expect(consoleSpy.calledOnce).to.be.true;

    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
