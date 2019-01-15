import { spoiledTamagotchi } from './../src/spoiled-tamagotchi.js';

describe('Spoiled Tamagotchi', function() {
let spoiledRoundBoi = new spoiledTamagotchi("Spoiled Round Boi");

beforeEach(function() {
  jasmine.clock().install();
  spoiledRoundBoi.setHunger();
  spoiledRoundBoi.setBoredom();
  spoiledRoundBoi.setEnergyLevel();
  spoiledRoundBoi.setCleanliness();
});

afterEach(function() {
  jasmine.clock().uninstall();
  spoiledRoundBoi.hunger = 10;
  spoiledRoundBoi.happiness = 10;
  spoiledRoundBoi.energyLevel = 10;
  spoiledRoundBoi.cleanliness = 5;
  spoiledRoundBoi.boredom = 0;
  spoiledRoundBoi.likesYou = 10;
});

it('should count down hunger', function() {
  jasmine.clock().tick(60001);
  expect(spoiledRoundBoi.hunger).toEqual(9);
});
//
// it('should die after 900001 milliseconds pass', function() {
//   jasmine.clock().tick(900001);
//   expect(spoiledRoundBoi.death()).toEqual(true);
// });

it('should get very hungry if the hunger level drops to 2', function() {
  spoiledRoundBoi.hunger = 1;
  expect(spoiledRoundBoi.isItHungry()).toEqual(true);
});

it('shold get very hungry if 8 minutes pass without feeding', function() {
  jasmine.clock().tick(480001);
  expect(spoiledRoundBoi.isItHungry()).toEqual(true);
})

it('should have a hunger level of 10 if it is fed', function() {
  jasmine.clock().tick(60001);
  spoiledRoundBoi.feed();
  expect(spoiledRoundBoi.hunger).toEqual(10);
});

it('should become more bored every three minutes', function() {
  jasmine.clock().tick(180001);
  expect(spoiledRoundBoi.boredom).toEqual(1);
})

});
