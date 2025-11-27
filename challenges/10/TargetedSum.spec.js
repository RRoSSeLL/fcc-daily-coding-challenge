import { Should } from "chai";
import { findTarget } from "./TargetedSum.ts";

Should();

describe('Targeted Sum', () => {
  describe('Find elements values in an array that add to target value and return its positions', () => {
    it('for [2, 7, 11, 15] and 9 targets are [0, 1]', () => {
      findTarget([2, 7, 11, 15], 9).should.have.members([0, 1]);
    });
    it('for[3, 2, 4, 5]  and 6 targets are [1, 2]', () => {
      findTarget([3, 2, 4, 5], 6).should.have.members([1, 2]);
    });
    it('for [1, 3, 5, 6, 7, 8] and 15 targets are [4, 5]', () => {
      findTarget([1, 3, 5, 6, 7, 8], 15).should.have.members([4, 5]);
    });
    it('for [1, 3, 5, 7] and 14 there is not valid targets', () => {
      findTarget([1, 3, 5, 7], 14).should.equal('Target not found');
    });
  });
});