export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.warmthLevel = 10;
    this.hatch = false;
    this.health = 10;
    this.hunger = 10;
    this.happiness = 10;
    this.energyLevel = 10;
    this.cleanliness = 10;
    this.boredom = 0;
  }

gettingColder() {
  setInterval(() => {
    this.warmthLevel -= 2;
  }, 10000);
}

isItCold() {
  if(this.warmthLevel > 0) {
    return false;
  } else {
    return true;
  }
}

warmUp() {
  this.warmthLevel += 2
}

death() {
  if(this.warmthLevel <= -8) {
    return true;
  } else {
    return false;
  }
}

readyToHatch() {
  setInterval(() => {
    this.hatch = true;
  }, 300000)
}


////------AFTER HATCH --------/////
  setHunger() {
      this.hunger--;
  }

  isItHungry() {
    if (this.hunger > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.hunger = 10;
  }

setBoredom() {
  setInterval(() => {
    this.boredom ++;
  }, 5000)
}

isItBored() {
  if(this.boredom > 6) {
    return false;
  } else {
    return true;
  }
}

play() {
  this.boredom -= 0.5
}

setEnergyLevel() {
  setInterval(() => {
    this.energyLevel --;
  }, 10000)
}

isItTired() {
  if(this.energyLevel >2) {
    return false;
  } else {
    return true
  }
}

setCleanliness() {
  setInterval(() => {
    this.cleanliness --;
  }, 7000)
}

clean() {
  this.cleanliness += 0.5
}

}
