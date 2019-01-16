import { spoiledTamagotchi } from './spoiled-tamagotchi.js';
import { Egg } from './tamagotchi-egg.js';
import eggIcon from './images/egg.gif';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';

let tamagotchiEgg = new Egg();
let tamagotchi = new spoiledTamagotchi();

tamagotchiEgg.gettingColder();
tamagotchiEgg.readyToHatch();

$(document).ready(function() {
  var eggImg = document.getElementById('eggWork');
  eggImg.src = eggIcon;

  setInterval(() => { document.getElementById("egg").innerHTML = "Warmth: " + tamagotchiEgg.warmthLevel;
  }, 1000);

  $("#warm").click(function() {
    tamagotchiEgg.warmUp();
  });

  setTimeout(function() {
    console.log("grumpy? " + tamagotchiEgg.grumpy);
    console.log("spoiled? " + tamagotchiEgg.spoiled);
    $(".giphy").show();
    $("#hatchedButtons").show();
    $(".eggUnhatched").hide();

    tamagotchi.setHunger();
    tamagotchi.setBoredom();
    tamagotchi.setEnergyLevel();
    tamagotchi.setCleanliness();
    tamagotchi.conditonOfTamagotchi();
    tamagotchi.healthOfTamagotchi();
    setInterval(() => {
      document.getElementById("hatched").innerHTML = "Hunger: " + tamagotchi.hunger + "<br>" + "Happiness: " + tamagotchi.happiness + "<br>" + "Boredom: " + tamagotchi.boredom + "<br>" + "Energy Level: " + tamagotchi.energyLevel + "<br>" + "Cleanliness: " + tamagotchi.cleanliness + "<br>" + "Health: " + tamagotchi.health ;
    }, 1000);
  }, 60000);


  $("#resting").click(function() {
    tamagotchi.rest();
  });


  $("#feeding").click(function() {
    tamagotchi.feed();
  });

  $("#playing").click(function() {
    tamagotchi.play();
  });

  $("#cleaning").click(function() {
    tamagotchi.clean();
  });

  const xhr = $.get('http://api.giphy.com/v1/gifs/search?q=tamagotchi&api_key=AWVfCt9Fhwjxlk59qr9Lua8QLvLdJwm1&limit=1');
  xhr.done(function(data) {
    console.log("success got data", data);
    document.getElementById("giphyoutput").src = data.data[0].images.original.url
  });

});
