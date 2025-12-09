import { expect } from "chai";
import { tribonacciSequence } from "./TribonacciSequence.ts";

describe('Tribonacci Sequence', () => {
  describe('Generetae a Triibonacci sequence for different bases', () => {
    it('base: [0, 0, 1], length: 20, result: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]', () => {
      expect(tribonacciSequence([0, 0, 1], 20)).to.have.members([0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]);
    });
    it('base: [21, 32, 43], length: 1, result: [21]', () => {
      expect(tribonacciSequence([21, 32, 43], 1)).to.have.members([21]);
    });
    it('base: [0, 0, 1], length: 0, result: [0]', () => {
      expect(tribonacciSequence([0, 0, 1], 0)).to.have.members([]);
    });
    it('base: [10, 20, 30], length: 2, result: [10, 20]', () => {
      expect(tribonacciSequence([10, 20, 30], 2)).to.have.members([10, 20]);
    });
    it('base: [10, 20, 30], length: 3, result: [10, 20, 30]', () => {
      expect(tribonacciSequence([10, 20, 30], 3)).to.have.members([10, 20, 30]);
    });
    it('base: [123, 456, 789], length: 8, result: [123, 456, 789, 1368, 2613, 4770, 8751, 16134]', () => {
      expect(tribonacciSequence([123, 456, 789], 8)).to.have.members([123, 456, 789, 1368, 2613, 4770, 8751, 16134]);
    });
  });
});