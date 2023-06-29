// Implementation of a class named Currency
export default class Currency {
  constructor(code, string) {
    this.code = code;
    this.string = string;
  }

  // getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // getter and setter for string
  get string() {
    return this._string;
  }

  set string(value) {
    this._string = value;
  }

  displayFullCurrency() {
    return `${this.string} (${this.code})`;
  }
}
