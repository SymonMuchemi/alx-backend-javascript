const Utils = require('./utils');

function sendPaymentRequestToAPI(totalAmount, totalShipping) {
  const amount = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  console.log(`The toal is: ${amount}`);
}

module.exports = sendPaymentRequestToAPI;
