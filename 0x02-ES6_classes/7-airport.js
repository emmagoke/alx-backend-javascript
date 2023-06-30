export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // getters and setter
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // getters and setter
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // overriding the default string description of the class
  get [Symbol.toStringTag]() {
    return this.code;
  }
}
