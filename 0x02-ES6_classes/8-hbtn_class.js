// When the class is cast into a Number, it should return the size.
// When the class is cast into a String, it should return the location.

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // getter and setter for size
  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  // getter and setter for location
  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  // This method does the work of the casting
  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return this.size;
    }
    if (type === 'string') {
      return this.location;
    }
    return this;
  }
}
