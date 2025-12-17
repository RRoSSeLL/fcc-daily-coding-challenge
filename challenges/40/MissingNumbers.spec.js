import { expect } from "chai";
import { findMissingNumbers } from "./MissingNumbers.ts";

describe('Missing Numbers', () => {
  describe('Find the missing numbers from an array', () => {
    it('in [1, 3, 5] missing numbers are [2, 4]', () => {
      expect(findMissingNumbers([1, 3, 5])).to.eql([2, 4]);
    });
    it('in [1, 2, 3, 4, 5] missing numbers are []', () => {
      expect(findMissingNumbers([1, 2, 3, 4, 5])).to.eql([]);
    });
    it('in [1, 10] missing numbers are [2, 3, 4, 5, 6, 7, 8, 9]', () => {
      expect(findMissingNumbers([1, 10])).to.eql([2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it('in [10, 1, 10, 1, 10, 1] missing numbers are [2, 3, 4, 5, 6, 7, 8, 9]', () => {
      expect(findMissingNumbers([10, 1, 10, 1, 10, 1])).to.eql([2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it('in [3, 1, 4, 1, 5, 9] missing numbers are [2, 6, 7, 8]', () => {
      expect(findMissingNumbers([3, 1, 4, 1, 5, 9])).to.eql([2, 6, 7, 8]);
    });
    it('in [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4] missing numbers are ', () => {
      expect(findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4])).to.eql([11]);
    });
  });
});