export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    this.evacuationWarningMessage();
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
