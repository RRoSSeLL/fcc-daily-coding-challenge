import { Should } from "chai";
import { fibonacciSequence } from "./FibonacciSequence.ts";

Should();

describe('Fibonacci Sequence', () => {
  describe('Generetae a Fibonacci sequence for different bases', () => {
    it('Base: [0, 1], length: 20, resutl: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]', () => {
      fibonacciSequence([0, 1], 20).should.have.members([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]);
    });
    it('Base: [21, 32], length: 1, resutl: [21]', () => {
      fibonacciSequence([21, 32], 1).should.have.members([21]);
    });
    it('Base: [0, 1], length: 0, resutl: []', () => {
      fibonacciSequence([0, 1], 0).should.have.members([]);
    });
    it('Base: [10, 20], length: 2, resutl: [10, 20]', () => {
      fibonacciSequence([10, 20], 2).should.have.members([10, 20]);
    });
    it('Base: [123456789, 987654321], length: 5, resutl: [123456789, 987654321, 1111111110, 2098765431, 3209876541]', () => {
      fibonacciSequence([123456789, 987654321], 5).should.have.members([123456789, 987654321, 1111111110, 2098765431, 3209876541]);
    });
  });
});