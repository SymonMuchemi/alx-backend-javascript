const calculateNumber = require('./utils');

function sendPaymentRequestToAPI(totalAmount, totalShipping) {
  const amount = calculateNumber('SUM', totalAmount, totalShipping);

  console.log(`The toal is: ${amount}`);
}

module.exports = sendPaymentRequestToAPI;
