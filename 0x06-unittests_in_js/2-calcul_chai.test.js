const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  it("This should return 6", () => {
    expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
  });
  it("This should return 1", () => {
    expect(calculateNumber("SUM", 0.5, 0.1)).to.equal(1);
  });
  it("This should return -4", () => {
    expect(calculateNumber("SUM", -2.5, -2)).to.equal(-4);
  });
  it("This should return -4", () => {
    expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
  });
  it("This should return 9", () => {
    expect(calculateNumber("SUBTRACT", 4, -5)).to.equal(9);
  });
  it("This should return 0", () => {
    expect(calculateNumber("SUBTRACT", -4, -4)).to.equal(0);
  });
  it("This should return 1", () => {
    expect(calculateNumber("SUBTRACT", -4, -5)).to.equal(1);
  });
  it("This should return 0.2", () => {
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
  });
  it("This should return 0", () => {
    expect(calculateNumber("DIVIDE", 0, 4.5)).to.equal(0);
  });
  it("This should return 'Error' ", () => {
    expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
  });
});
