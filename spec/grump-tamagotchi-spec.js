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
    grumpyRoundBoi.health =10;
    grumpyRoundBoi.hunger = 10;
    grumpyRoundBoi.happiness = 10;
    grumpyRoundBoi.energyLevel = 10;
    grumpyRoundBoi.cleanliness = 5;
    grumpyRoundBoi.boredom = 0;
    grumpyRoundBoi.likesYou = 10;
  });

  it('should count down hunger', function() {
    jasmine.clock().tick(60001);
    expect(grumpyRoundBoi.hunger).toEqual(4);
  });




});
