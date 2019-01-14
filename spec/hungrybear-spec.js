import { HungryBear } from './../src/hungry-bear.js';

describe('HungryBear', function() {
  let roundBoi = new HungryBear("Round Boi");

  beforeEach(function() {
    jasmine.clock().install();
    roundBoi.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should get very hungry if the food level drops below zero', function() {
    roundBoi.foodLevel = 0;
    expect(roundBoi.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(roundBoi.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    roundBoi.feed();
    expect(roundBoi.foodLevel).toEqual(10);
  });

});
