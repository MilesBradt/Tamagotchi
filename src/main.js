import { Tamagotchi } from './tamagotchi.js';
import $ from 'jquery';

let tamagotchi = new Tamagotchi();
tamagotchi.gettingColder();
tamagotchi.setHunger();
tamagotchi.setBoredom();
tamagotchi.setEnergyLevel();
tamagotchi.setCleanliness();
tamagotchi.conditonOfTamagotchi();
tamagotchi.healthOfTamagotchi();

$(document).ready(function() {
  $("#feeding").click(function(event) {
    tamagotchi.feed();
  });

  $("#playing").click(function(event) {
    tamagotchi.play();
  });

  $("#cleaning").click(function(event) {
    tamagotchi.clean();
  });

  setInterval(() => { document.getElementById("output").innerHTML = "Hunger: " + tamagotchi.hunger + "<br>" + "Happiness: " + tamagotchi.happiness + "<br>" + "Boredom: " + tamagotchi.boredom + "<br>" + "Energy Level: " + tamagotchi.energyLevel + "<br>" + "Cleanliness: " + tamagotchi.cleanliness + "<br>" + "Health: " + tamagotchi.health ;
  }, 1000);

});
