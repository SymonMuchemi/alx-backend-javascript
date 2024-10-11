export default class Airport {
  constructor(name, code) {
    Airport.checkName(name);
    Airport.checkCode(code);
    this._name = name;
    this._code = code;
  }

  static checkName(name) {
    if (typeof name !== 'string') throw TypeError('Name must be a string!');
  }

  static checkCode(code) {
    if (typeof code !== 'string') throw TypeError('Code must be a string!');
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
