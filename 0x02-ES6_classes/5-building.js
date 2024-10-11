export default class Building {
  constructor(sqft) {
    Building.checkSqft(sqft);
    this._sqft = sqft;

    if (this.constructor !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
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

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
