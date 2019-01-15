import { Tamagotchi } from './tamagotchi.js';
import { Egg } from './tamagotchi-egg.js';
import eggIcon from './images/egg.gif';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';

let tamagotchiEgg = new Egg();

tamagotchiEgg.gettingColder();

let tamagotchi = new Tamagotchi();
tamagotchi.gettingColder();
tamagotchi.setHunger();
tamagotchi.setBoredom();
tamagotchi.setEnergyLevel();
tamagotchi.setCleanliness();
tamagotchi.conditonOfTamagotchi();
tamagotchi.healthOfTamagotchi();

$(document).ready(function() {
  var eggImg = document.getElementById('eggWork');
  eggImg.src = eggIcon;
  $("#feeding").click(function() {
    tamagotchi.feed();
  });

  $("#playing").click(function() {
    tamagotchi.play();
  });

  $("#cleaning").click(function() {
    tamagotchi.clean();
  });

  $("#warm").click(function() {
    tamagotchiEgg.warmUp();
  });

  const xhr = $.get('http://api.giphy.com/v1/gifs/search?q=tamagotchi&api_key=AWVfCt9Fhwjxlk59qr9Lua8QLvLdJwm1&limit=1');
  xhr.done(function(data) {
    console.log("success got data", data);
    document.getElementById("giphyoutput").src = data.data[0].images.original.url
  });

  setInterval(() => { document.getElementById("output").innerHTML = "Warmth: " + tamagotchiEgg.warmthLevel;
  }, 1000);

  // setInterval(() => { document.getElementById("output").innerHTML = "Hunger: " + tamagotchi.hunger + "<br>" + "Happiness: " + tamagotchi.happiness + "<br>" + "Boredom: " + tamagotchi.boredom + "<br>" + "Energy Level: " + tamagotchi.energyLevel + "<br>" + "Cleanliness: " + tamagotchi.cleanliness + "<br>" + "Health: " + tamagotchi.health ;
  // }, 1000);

});
