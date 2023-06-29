// Implementation of a class named Currency
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
