// implements a currency classs
class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }

    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }

    this._name = name;
    this._code = code;
  }

  // code getter
  get code() {
    return this._code;
  }

  // name getter
  get name() {
    return this._name;
  }

  // code setter
  set code(x) {
    if (typeof x === 'string') {
      this._code = x;
    } else {
      throw TypeError('Code must be a string');
    }
  }

  set name(x) {
    if (typeof x === 'string') {
      this._name = x;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
