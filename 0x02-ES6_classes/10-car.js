export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // getter and setter for brand
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  // getter and setter for motor
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  // getter and setter for brand
  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  // Creating a new object of the class Car
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const NewCar = this.constructor[Symbol.species];

    return new NewCar();
  }
}
