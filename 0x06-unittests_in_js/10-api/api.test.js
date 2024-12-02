/* eslint-disable quotes */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/lowercase-name */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
const request = require("request");
const { expect } = require("chai");

const API_URL = "http://localhost:7865";

describe("API integration test", () => {
  const paymentObj = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };

  it("GET / returns correct response", (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal("Welcome to the payment system");
      done();
    });
  });

  it("GET /cart/:id returns the correct response", (done) => {
    request.get(`${API_URL}/cart/23`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Payment methods for cart 23");
      done();
    });
  });

  it("GET /cart/:id returns the correct response on invalid id", (done) => {
    request.get(`${API_URL}/cart/p`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      expect(body).to.be.equal(":id must be a number");
      done();
    });
  });

  it("GET /available_payments returns correct response", (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.deep.equal(paymentObj);
      done();
    });
  });
});

describe("POST /login", () => {
  it("POST /login with valid username returns correct response", (done) => {
    request.post(
      {
        url: `${API_URL}/login`,
        body: { username: "JohnDoe" },
        json: true,
      },
      (_err, res, body) => {
        if (res) {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal("Welcome JohnDoe");
        } else {
          console.error('Request failed:', _err.message);
        }
        done();
      },
    );
  });

  it('Returns the right message', (done) => {
    const data = { userName: 'Guillaume' };
    request.post('http://localhost:7865/login', {
      json: {
        username: 'BobDylan',
      },
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("POST /login with missing username returns 400", (done) => {
    request.post(
      {
        url: `${API_URL}/login`,
        json: {},
      },
      (_err, res, body) => {
        expect(res.statusCode).to.be.equal(400);
        done();
      },
    );
  });

  it("POST /login with invalid JSON returns 400", (done) => {
    request.post(
      {
        url: `${API_URL}/login`,
        body: "invalid_json",
      },
      (_err, res, body) => {
        expect(res.statusCode).to.be.equal(400);
        done();
      },
    );
  });
});
