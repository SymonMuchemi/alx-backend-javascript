import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    SkyHighBuilding.checkFloors(floors);
    this._floors = floors;
  }

  static checkFloors(floors) {
    if (typeof floors !== 'number') {
      throw TypeError('Floors must be a number!');
    }
  }

  // floors getter
  get floors() {
    return this._floors;
  }

  // sqft getter
  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
