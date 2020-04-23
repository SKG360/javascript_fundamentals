class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }

  checkCranky() {
    this.count += 1;
    if (this.count >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    }
  }

  shoot() {
    this.checkCranky();

    if (this.cranky === false) {
      return 'Twang!!!'
    } else {
      return 'NO!'
    }

  }

  run() {
    this.cranky = true;
    if (this.layingDown === true) {
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    this.count = 0;
    this.cranky = false;
    if (this.standing === true) {
      return 'NO!';
    } else {
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true) {
      this.cranky = !this.cranky;
    } else {
      return 'Not while I\'m laying down!';
    }
  }

}

module.exports = Centaur;
