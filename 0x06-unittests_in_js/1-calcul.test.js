const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  it("This should return 6", () => {
    assert.equal(calculateNumber("SUM", 1.4, 4.5), 6);
  });
  it("This should return 1", () => {
    assert.equal(calculateNumber("SUM", 0.5, 0.1), 1);
  });
  it("This should return -4", () => {
    assert.equal(calculateNumber("SUM", -2.5, -2), -4);
  });
  it("This should return -4", () => {
    assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
  });
  it("This should return 9", () => {
    assert.equal(calculateNumber("SUBTRACT", 4, -5), 9);
  });
  it("This should return True for assertion", () => {
    assert.notEqual(calculateNumber("SUBTRACT", -4, -5), 9);
  });
  it("This should return 1", () => {
    assert.equal(calculateNumber("SUBTRACT", -4, -5), 1);
  });
  it("This should return 0.2", () => {
    assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });
  it("This should return 0", () => {
    assert.equal(calculateNumber("DIVIDE", 0, 4.5), 0);
  });
  it("This should return 'Error' ", () => {
    assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });
});
