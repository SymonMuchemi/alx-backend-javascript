/* eslint-disable jest/lowercase-name */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns the correct response', (done) => {
    request.get(`${API_URL}/cart/23`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 23');
      done();
    });
  });

  it('GET /cart/:id returns the correct response on invalid id', (done) => {
    request.get(`${API_URL}/cart/p`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      expect(body).to.be.equal(':id must be a number');
      done();
    });
  });
});
