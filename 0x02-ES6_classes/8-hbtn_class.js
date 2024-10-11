export default class HolbertonClass {
  constructor(size, location) {
    HolbertonClass.checkSize(size);
    HolbertonClass.checkLocation(location);
    this._size = size;
    this._location = location;
  }

  static checkSize(size) {
    if (typeof size !== 'number') throw TypeError('Size must be a number!');
  }

  static checkLocation(location) {
    if (typeof location !== 'string') throw TypeError('Location must be a string!');
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
