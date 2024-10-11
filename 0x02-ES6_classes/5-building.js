export default class Building {
  constructor(sqft) {
    Building.checkSqft(sqft);
    this._sqft = sqft;
  }

  static checkSqft(x) {
    if (typeof x !== 'number') throw TypeError('Sqft must be a number!');
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // getter
  set sqft(x) {
    Building.checkSqft(x);
    this._sqft = x;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
