import { Should } from "chai";
import { findDuplicates } from "./ArrayDuplicates.ts";

Should();

describe('Array Duplicates', () => {
  describe('Find and sort duplicated elements in an array', () => {
    it('for [1, 2, 3, 4, 5] duplicated elements are []', () => {
      findDuplicates([1, 2, 3, 4, 5]).should.have.members([]);
    });
    it('for ([1, 2, 3, 4, 1, 2] duplicated elements are [1, 2]', () => {
      findDuplicates([1, 2, 3, 4, 1, 2]).should.have.members([1, 2]);
    });
    it('for [2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4] duplicated elements are [-6, 0, 2, 4, 5, 23]', () => {
      findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]).should.have.members([-6, 0, 2, 4, 5, 23]);
    });
  });
});