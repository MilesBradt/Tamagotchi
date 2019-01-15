export class spoiledTamagotchi {

  constructor(name) {
    this.name = name;
    // this.warmthLevel = 10;
    // this.hatch = false;
    this.health = 10;
    this.hunger = 10;
    this.happiness = 10;
    this.energyLevel = 10;
    this.cleanliness = 5;
    this.boredom = 0;
    this.likesYou = 10;
  }

  death() {
    if(this.warmthLevel <= -8) {
      return true;
    } else {
      return false;
    }
  }

  ////------AFTER HATCH --------/////
  setHunger() {
    let hungerCounter = setInterval(() => {
      if (this.hunger == -100) {
        clearInterval(hungerCounter);
      } else {
        this.hunger--;
      }
    }, 60000);
  }

  isItHungry() {
    if (this.hunger > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.hunger += 5;
  }

  setBoredom() {
    let boredomCounter = setInterval(() => {
      if(this.boredom == 10) {
        clearInterval(boredomCounter);
      } else {
        this.boredom ++;
      }
    }, 5000);
  }

  isItBored() {
    if(this.boredom > 6) {
      return false;
    } else {
      return true;
    }
  }

  play() {
    this.boredom -= 0.5;
  }

  setEnergyLevel() {
    let energyLevelCounter = setInterval(() => {
      if(this.energyLevel == -10) {
        clearInterval(energyLevelCounter);
      } else {
        this.energyLevel --;
      }
    }, 10000);
  }

  isItTired() {
    if(this.energyLevel >2) {
      return false;
    } else {
      return true;
    }
  }

  rest() {
    this.energyLevel = 10;
  }

  setCleanliness() {
    let cleanlinessCounter = setInterval(() => {
      if (this.cleanlinessCounter == -10) {
        clearInterval(cleanlinessCounter);
      } else {
        this.cleanliness -= 2;
      }
    }, 7000);
  }

  clean() {
    this.cleanliness += 0.5;
  }

  // Happiness
  conditonOfTamagotchi() {
    let happinessCounter = setInterval(() => {
      if(this.happiness == 0) {
        clearInterval(happinessCounter);
      }  else  if((-30 <= this.hunger && this.hunger <= 0) || (5 < this.boredom && this.boredom > 10) || (-10 <= this.energyLevel && this.energyLevel <= 0) || (-10 <= this.cleanliness && this.cleanliness <= 0) || (-10 <= this.health && this.health <= 0))
      {
        this.happiness--;
      }
    }, 5000);
  }

  healthOfTamagotchi() {
    let heatlhCounter = setInterval (() => {
      if(this.health == 0) {
        clearInterval(heatlhCounter);
      } else if ((-50 <= this.hunger && this.hunger <= -10) || (-10 <= this.energyLevel && this.energyLevel <= 0) || (-10 <= this.cleanliness && this.cleanliness <= 0)) {
        this.health -= 2;
      }
    }, 10000);
  }

  affectionMeter() {
    let affectionCounter = setInterval (() => {
      if (this.likesYou == 0) {
        clearInterval(affectionCounter);
      } else if(this.happiness <= 5) {
        this.likesYou -= 0.5;
      }
    }, 10000);
  }

}
