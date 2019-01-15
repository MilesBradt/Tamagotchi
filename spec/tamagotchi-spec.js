import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let roundBoi = new Tamagotchi("Round Boi");

  beforeEach(function() {
    jasmine.clock().install();
    roundBoi.gettingColder();
    roundBoi.readyToHatch();
    roundBoi.setBoredom();
    roundBoi.setHunger();
    roundBoi.setEnergyLevel();
    roundBoi.setCleanliness();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    roundBoi.warmthLevel = 10;
    roundBoi.health = 10;
    roundBoi.hunger = 10;
    roundBoi.happiness = 10;
    roundBoi.energyLevel = 10;
    roundBoi.cleanliness = 10;
    roundBoi.boredom = 0;
    roundBoi.likesYou = 10;
  });

  it('should count down hunger', function() {
    jasmine.clock().tick(1001);
    expect(roundBoi.hunger).toEqual(9)
  });

  it('should die after 900001 milliseconds pass', function() {
    jasmine.clock().tick(900001);
    expect(roundBoi.death()).toEqual(true);
  });

  it('should have a warmth level of 8 after 10001 milliseconds pass', function() {
    jasmine.clock().tick(10001);
    expect(roundBoi.warmthLevel).toEqual(8);
  });

  it('should get cold if the warmth level drops below 0', function() {
    roundBoi.warmthLevel = 0;
    expect(roundBoi.isItCold()).toEqual(true);
  });

  it('should set hatch to true after five minutes', function() {
    jasmine.clock().tick(300001);
    expect(roundBoi.hatch).toEqual(true);
  });


  it('should get very hungry if the hunger level drops below zero', function() {
    roundBoi.hunger = -1
    expect(roundBoi.isItHungry()).toEqual(true);
  });

  it('should warm up the egg by 2 each time its called', function() {
    jasmine.clock().tick(20001);
    roundBoi.warmUp();
    expect(roundBoi.warmthLevel).toEqual(8);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(roundBoi.isItHungry()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(1001);
    roundBoi.feed();
    expect(roundBoi.hunger).toEqual(14);
  });

  it('should increase bordem after five seconds', function() {
    jasmine.clock().tick(5001);
    expect(roundBoi.boredom).toEqual(1);
  });

});
