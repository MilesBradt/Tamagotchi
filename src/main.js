import { Tamagotchi } from './tamagotchi.js';
import $ from 'jquery';




$(document).ready(function() {
  let testing = new Tamagotchi();
  testing.gettingColder();

  setInterval(() => {
    testing.setHunger(); document.getElementById("output").innerHTML = "Hunger: " + testing.hunger;
  }, 1000);

  console.log(testing.hunger);
});
