export class Egg {

  constructor(name) {
    this.name = name;
    this.warmthLevel = 10;
    this.hatch = false;
  }

  gettingColder() {
    setInterval(() => {
      this.warmthLevel -= 2;
    }, 180000);
  }

  warmUp() {
    if(this.warmthLevel >= 25) {
      this.warmthLevel += 0;
    } else {
    this.warmthLevel += 1;
    }
  }

}
