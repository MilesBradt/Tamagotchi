export class Egg {

  constructor(name) {
    this.name = name;
    this.warmthLevel = 10;
    this.hatch = false;
    this.spoiled = false;
    this.okay = true;
    this.grumpy = false;
  }

  gettingColder() {
    setInterval(() => {
      this.warmthLevel -= 2;
      if(this.warmthLevel <= 0) {
        this.grumpy = true;
        this.spoiled = false;
      }
    }, 1000);
  }

  warmUp() {
    if(this.warmthLevel >= 25 && this.grumpy === true) {
      this.warmthLevel += 0
    }
    else if(this.warmthLevel >= 25 && this.grumpy != true) {
      this.spoiled = true;
      this.warmthLevel += 0
    } else {
    this.warmthLevel += 3;
    }
  }

  readyToHatch() {
    setInterval(() => {
      this.hatch = true;
    }, 5000);
  }



}
