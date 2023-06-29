// Implementation of a class named Pricing
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // getter and setter of amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // getter and setter of currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${value} must be an instanceof of class Currency`);
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
