const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("This should return 7", () => {
    assert.equal(calculateNumber(2, 5), 7);
  });
  it("This should return 5", () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("This should return 5", () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("This should return 1", () => {
    assert.equal(calculateNumber(0.5, 0.1), 1);
  });
  it("This should return 1", () => {
    // -2.5 will be rounded to -2 because -2 is greater than -2.5
    assert.equal(calculateNumber(-2.5, 3), 1);
  });
  it("This should return -4", () => {
    assert.equal(calculateNumber(-2.5, -2), -4);
  });
});
