class Wizard {
  constructor (wizard) {
    this.name = wizard.name;
    if (wizard.bearded === false) {
      this.bearded = false;
    } else {
      this.bearded = true;
    }
    this.isRested = true;
    this.count = 0;
  }

  incantation(rootPower) {
    return rootPower.toUpperCase();
  }

  cast() {
    this.count += 1;
    if (this.count <= 2) {
      return 'MAGIC BULLET';
    } else {
      this.isRested = false;
      return 'I SHALL NOT CAST!'
    }
  }
}
//
module.exports = Wizard;
