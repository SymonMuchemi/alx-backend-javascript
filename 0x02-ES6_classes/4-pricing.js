// implements a Pricing class
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    Pricing.checkAmount(amount);
    Pricing.checkCurrency(currency);
    this._amount = amount;
    this._currency = currency;
  }

  static checkAmount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
  }

  static checkCurrency(currency) {
    if (currency instanceof Currency === false) {
      throw TypeError('Currency must be a currency');
    }
  }

  static checkConversionRate(conversionRate) {
    if (typeof conversionRate !== 'number') {
      throw TypeError('ConversionRate must be a number');
    }
  }

  // amount getter
  get amount() {
    return this._amount;
  }

  // currency getter
  get currency() {
    return this._currency;
  }

  // amount setter
  set amount(x) {
    this.checkAmount(x);
    this._amount = x;
  }

  // currency setter
  set currency(x) {
    this.checkCurrency(x);
    this._currency = x;
  }

  static convertPrice(amount, conversionRate) {
    this.checkAmount(amount);
    this.checkConversionRate(conversionRate);

    return amount * conversionRate;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}

export default Pricing;
