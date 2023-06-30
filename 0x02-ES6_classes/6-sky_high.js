import Building from './5-building'

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors){
    super(sqft);
    this.floors = floors;
  }

  // getter and setter for floors
  get floors () {
    return this._floors;
  }
  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage () {
    return "Evacuate slowly the NUMBER_OF_FLOORS floors";
  }
}