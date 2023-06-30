/*
 * This is an Implimentation of an Abstract class called Building
 */

export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // getter and setter of sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}

// Every class that extends from Building should implement the method
// evacuationWarningMessage
// Building.prototype.evacuationWarningMessage = function () {
//     throw new Error('Class extending Building must override evacuationWarningMessage');
//   }
