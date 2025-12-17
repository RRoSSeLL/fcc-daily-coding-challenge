import { expect } from "chai";
import { tooMuchScreenTime } from "./ScreenTime.ts";

describe('Screen Time', () => {
  describe('Determine if the hours of screen time in a week are to muchg', () => {
    it('[1, 2, 3, 4, 5, 6, 7] is not too much screen time', () => {
      expect(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])).to.be.false;
    });
    it('[7, 8, 8, 4, 2, 2, 3] is not too much screen time', () => {
      expect(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3])).to.be.false;
    });
    it('[5, 6, 6, 6, 6, 6, 6] is not too much screen time', () => {
      expect(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6])).to.be.false;
    });
    it('([1, 2, 3, 11, 1, 3, 4] 10 hours in a day is too much screen time', () => {
      expect(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4])).to.be.true;
    });
    it('[1, 2, 3, 10, 2, 1, 0] 11 hours in a day is too much screen time', () => {
      expect(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0])).to.be.true;
    });
    it('[3, 3, 5, 8, 8, 9, 4] 8 hours avg in a week is too much screen time', () => {
      expect(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])).to.be.true;
    });
    it('[3, 9, 4, 8, 5, 7, 6] 6 hours avg in a week is too much screen time', () => {
      expect(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])).to.be.true;
    });
  });
});