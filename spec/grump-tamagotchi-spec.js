import { grumpTamagotchi } from './../src/grump-tamagotchi.js';

describe('grumpTamagotchi', function() {
  let grumpyRoundBoi = new grumpTamagotchi(" Grumpy Pants Round Boi");

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();

  });
});
