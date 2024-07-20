export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(newCode) {
    this._code = newCode;
  }

  set name(newName) {
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
