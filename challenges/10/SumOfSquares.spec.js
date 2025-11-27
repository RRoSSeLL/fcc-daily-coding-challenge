import { Should } from "chai";
import { sumOfSquares } from "./SumOfSquares.ts";

Should();

describe('Sum of Squares', () => {
  describe('add the squares of all numbers up to N', () => {
    it('sum of squares for 5 is 55', () => {
      sumOfSquares(5).should.equal(55);
    });
    it('sum of squares for 10 is 385', () => {
      sumOfSquares(10).should.equal(385);
    });
    it('sum of squares for 25 is 5525', () => {
      sumOfSquares(25).should.equal(5525);
    });
    it('sum of squares for 500 is 41791750', () => {
      sumOfSquares(500).should.equal(41791750);
    });
    it('sum of squares for 1000 is 333833500', () => {
      sumOfSquares(1000).should.equal(333833500);
    });
  });
});