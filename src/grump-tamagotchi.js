export class grumpTamagotchi {

  constructor(name) {
    this.name = name;
    this.health = 6;
    this.hunger = 5;
    this.happiness = 3;
    this.energyLevel = 2;
    this.cleanliness = 3;
    this.boredom = 7;
    this.likesYou = 0;
  }

  ////------AFTER HATCH --------/////
  setHunger() {
    let hungerCounter = setInterval(() => {
      if (this.hunger == -5) {
        clearInterval(hungerCounter);
      } else {
        this.hunger --;
      }
    }, 60000);
  }

  isItHungry() {
    if (this.hunger > 2) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.hunger += 1;
  }

  setBoredom() {
    let boredomCounter = setInterval(() => {
      if(this.boredom == 10) {
        clearInterval(boredomCounter);
      } else {
        this.boredom ++
      }
    }, 150000);
  }

  isItBored() {
    if(this.boredom < 6) {
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
    if(this.energyLevel > 2) {
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

  isItClean(){
    if(this.cleanliness > 2) {
      return false;
    } else {
      return true;
    }
  }

  clean() {
    this.cleanliness += 0.5;
  }

  // Happiness
  conditonOfTamagotchi() {
    let happinessCounter = setInterval(() => {
      if(this.happiness == 0) {
        clearInterval(happinessCounter);
      }  else  if((-5 <= this.hunger && this.hunger <= 0) || (5 <= this.boredom && this.boredom <= 10) || (-10 <= this.energyLevel && this.energyLevel <= 0) || (-10 <= this.cleanliness && this.cleanliness <= 0) || (-10 <= this.health && this.health <= 0))
      {
        this.happiness--;
      }
    }, 5000);
  }

  healthOfTamagotchi() {
    let heatlhCounter = setInterval (() => {
      if(this.health == 0) {
        clearInterval(heatlhCounter);
      } else if ((-5 <= this.hunger && this.hunger <= 0) || (-10 <= this.energyLevel && this.energyLevel <= 0) || (-10 <= this.cleanliness && this.cleanliness <= 0))
      {
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
