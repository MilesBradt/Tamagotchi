import { grumpTamagotchi } from './../src/grump-tamagotchi.js';

describe('grumpTamagotchi', function() {
  let grumpyRoundBoi = new grumpTamagotchi(" Grumpy Pants Round Boi");

  beforeEach(function() {
    jasmine.clock().install();
    grumpyRoundBoi.setHunger();
    grumpyRoundBoi.setBoredom();
    grumpyRoundBoi.setEnergyLevel();
    grumpyRoundBoi.setCleanliness();
    grumpyRoundBoi.conditonOfTamagotchi();
    grumpyRoundBoi.healthOfTamagotchi();
    grumpyRoundBoi.affectionMeter();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    grumpyRoundBoi.health =6;
    grumpyRoundBoi.hunger = 5;
    grumpyRoundBoi.happiness = 3;
    grumpyRoundBoi.energyLevel = 2;
    grumpyRoundBoi.cleanliness = 3;
    grumpyRoundBoi.boredom = 7;
    grumpyRoundBoi.likesYou = 0;
  });

  it('should count down hunger', function() {
    jasmine.clock().tick(60001);
    expect(grumpyRoundBoi.hunger).toEqual(4);
  });

  it('should get very hungry if the hunger level drops to 2', function() {
    grumpyRoundBoi.hunger = 1;
    expect(grumpyRoundBoi.isItHungry()).toEqual(true);
  });

  it('should have a hunger level of 10 if it is fed', function() {
    jasmine.clock().tick(60001);
    grumpyRoundBoi.feed();
    expect(grumpyRoundBoi.hunger).toEqual(5);
  });

  it('should become more bored every two and a half minutes', function() {
    jasmine.clock().tick(180001);
    expect(grumpyRoundBoi.boredom).toEqual(8);
  });

});
