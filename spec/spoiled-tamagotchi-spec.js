import { spoiledTamagotchi } from './../src/spoiled-tamagotchi.js';

describe('Spoiled Tamagotchi', function() {
  let spoiledRoundBoi = new spoiledTamagotchi("Spoiled Round Boi");

  beforeEach(function() {
    jasmine.clock().install();
    spoiledRoundBoi.setHunger();
    spoiledRoundBoi.setBoredom();
    spoiledRoundBoi.setEnergyLevel();
    spoiledRoundBoi.setCleanliness();
    spoiledRoundBoi.conditonOfTamagotchi();
    spoiledRoundBoi.healthOfTamagotchi();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    spoiledRoundBoi.health =10;
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

  it('should get very hungry if 8 minutes pass without feeding', function() {
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
  });

  it('should become very bored if the boredom level reaches 8', function() {
    jasmine.clock().tick(1440001);
    expect(spoiledRoundBoi.isItBored()).toEqual(true);
  })

  it('should have a boredom level of 7.5 after being played with', function() {
    jasmine.clock().tick(1440000);
    spoiledRoundBoi.play();
    expect(spoiledRoundBoi.boredom).toEqual(7.5);
  });

  it('should get tired if the energyLevel drops below 2', function() {
    spoiledRoundBoi.energyLevel = 1;
    expect(spoiledRoundBoi.isItTired()).toEqual(true);
  });

  it('should regain full energy levels after resting', function(){
    spoiledRoundBoi.energyLevel = 1;
    spoiledRoundBoi.rest();
    expect(spoiledRoundBoi.energyLevel).toEqual(10);
  });

  it('should become dirtier every seven seconds', function(){
    jasmine.clock().tick(7001);
    expect(spoiledRoundBoi.cleanliness).toEqual(3);
  });

  it('should be very dirty if cleanliness is less than 2', function(){
    spoiledRoundBoi.cleanliness = 1;
    expect(spoiledRoundBoi.isItClean()).toEqual(true);
  })

  it('should become cleaner after it is cleaned', function() {
    spoiledRoundBoi.cleanliness = 3;
    spoiledRoundBoi.clean();
    expect(spoiledRoundBoi.cleanliness).toEqual(3.5);
  });

it('should become less happy if hunger level is between -5 and 0 for five seconds', function() {
  spoiledRoundBoi.hunger = -3;
  jasmine.clock().tick(5001);
  expect(spoiledRoundBoi.happiness).toEqual(9);
});

it('should become less happy if boredom level is between 5 and 10 for five seconds', function() {
  spoiledRoundBoi.boredom = 6;
  jasmine.clock().tick(5001);
  expect(spoiledRoundBoi.happiness).toEqual(9);
});

it('should become less happy if energy level is between -10 and 0', function() {
  spoiledRoundBoi.energyLevel = -1;
  jasmine.clock().tick(5001);
  expect(spoiledRoundBoi.happiness).toEqual(9);
});

it('should become less happy if cleanliness level is between -10 and 0', function(){
  spoiledRoundBoi.cleanliness = -5;
  jasmine.clock().tick(5001);
  expect(spoiledRoundBoi.happiness).toEqual(9);
});

it('should become less happy if health levels are between -10 and 0', function(){
  spoiledRoundBoi.health = -4;
  jasmine.clock().tick(5001);
  expect(spoiledRoundBoi.happiness).toEqual(9);
});

it('should become less healthy if hunger levels are between -5 and 0', function(){
  spoiledRoundBoi.hunger = -4;
  jasmine.clock().tick(10001);
  expect(spoiledRoundBoi.health).toEqual(8);
});

it('should become less healthy if energy level is between -10 and 0', function() {
  spoiledRoundBoi.energyLevel = -1;
  jasmine.clock().tick(10001);
  expect(spoiledRoundBoi.health).toEqual(8);
});

it('should become less health if cleanliness leve lis between -10 and 0', function(){
  spoiledRoundBoi.cleanliness = -3;
  jasmine.clock().tick(10001);
  expect(spoiledRoundBoi.health).toEqual(8);
});

it('should like you less if the happiness is less than 5', function(){
  spoiledRoundBoi.happiness = 3;
  jasmine.clock().tick(10001);
  expect(spoiledRoundBoi.likesYou).toEqual(4.5);
})

});
