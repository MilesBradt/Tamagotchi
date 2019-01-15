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

});


it('should count down hunger', function() {
  jasmine.clock().tick(1001);
  expect(spoiledRoundBoi.hunger).toEqual(9)


});
})
