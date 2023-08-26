const utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  let result = utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
