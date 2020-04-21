class Medusa {
  constructor (name) {
    this.name = name;
    this.statues = [];
    this.notStoned = [];
  }

  stare(victim) {
    if (this.statues.length <= 2) {
      this.statues.push(victim);
      victim.stoned = true;
    } else if (this.statues.length === 3) {
      victim.stoned = true;
      let victim1 = this.statues.shift();
      this.statues.push(victim);
      victim1.stoned = false;
      this.notStoned.push(victim1);
    }
  }

}

module.exports = Medusa;
