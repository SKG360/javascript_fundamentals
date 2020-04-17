class Hobbit {
  constructor(name, disposition) {
    this.name = name;
    this.disposition = disposition || 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;

    if (this.name === 'Frodo') {
      this.hasRing = true;
    }
  }

  celebrateBirthday() {
    this.age += 1;
    if (this.age >= 33) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  }

}

module.exports = Hobbit;
