class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.count = 0;
    this.hungry = false;
  }

  change() {
    this.count += 1;
    this.hungry = true;

    if (this.count % 2 === 0) {
      this.human = true;
      this.wolf = false;
    } else {
      this.human = false;
      this.wolf = true;
    }
  }
}

module.exports = Werewolf;
