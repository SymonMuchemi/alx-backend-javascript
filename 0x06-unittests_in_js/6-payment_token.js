function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ result: 'Amazing result!' });
  }
}

module.exports = getPaymentTokenFromAPI;
