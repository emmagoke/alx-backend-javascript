const utils = require("./utils");
const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./4-payment");

describe("This check the property of utils", () => {
  it("Checks what was log to the console", () => {
    const check = sinon.spy(console);

    const stub = sinon.stub(utils, "calculateNumber");

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith("SUM", 100, 20)).to.be.true;
    expect(stub.callCount).to.equal(1);
    expect(check.log.calledWith("The total is: 10")).to.be.true;
    expect(check.log.callCount).to.equal(1);
    stub.restore;
    check.log.restore;
  });
});
