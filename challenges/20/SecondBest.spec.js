import { Should } from "chai";
import { getLaptopCost } from "./SecondBest.ts";

Should();

describe('Second Best', () => {
  describe('Given an array of prices and a budget get the best or second best price under the bugdet', () => {
    it('prices: [1500, 2000, 1800, 1400], Budget: 1900 second best iption is 1800', () => {
      getLaptopCost([1500, 2000, 1800, 1400], 1900).should.equal(1800);
    });
    it('prices: [1500, 2000, 2000, 1800, 1400], Budget: 1900 second best iption is 1800', () => {
      getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900).should.equal(1800);
    });
    it('prices: [2099, 1599, 1899, 1499], Budget: 2200 second best iption is 1899', () => {
      getLaptopCost([2099, 1599, 1899, 1499], 2200).should.equal(1899);
    });
    it('prices: [2099, 1599, 1899, 1499], Budget: 1000 second best iption is 0', () => {
      getLaptopCost([2099, 1599, 1899, 1499], 1000).should.equal(0);
    });
    it('prices: [1200, 1500, 1600, 1800, 1400, 2000], Budget: 1450 second best iption is 1400', () => {
      getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450).should.equal(1400);
    });
  })
});