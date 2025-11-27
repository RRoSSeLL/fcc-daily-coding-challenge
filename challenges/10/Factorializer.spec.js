import { Should } from "chai";
import { factorial } from "./Factorializer.ts";

Should();

describe('Factorializer', () => {
  describe('Calculate factorial of nuber', () => {
    it('Factorial of 0 is 1', () => {
      factorial(0).should.equal(1);
    });
    it('Factorial of 5 is 120', () => {
      factorial(5).should.equal(120);
    });
    it('Factorial of  is 2432902008176640000', () => {
      factorial(20).should.equal(2432902008176640000);
    });
  });
})