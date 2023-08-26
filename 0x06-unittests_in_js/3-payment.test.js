const utils = require("./utils");
const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");

describe("This check the property of utils", () => {
  it("Checks if utils method is called with the right func", () => {
    const check = sinon.spy(utils);

    sendPaymentRequestToApi(100, 20);
    expect(check.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
    expect(check.calculateNumber.callCount).to.equal(1);
    check.calculateNumber.restore;
  });
});
