import { Should } from "chai";
import { evaulate } from "./UnorderOfOperation.ts";

Should();

describe('Unorder Of Operations', () => {
  describe('Given an array of number and an array of operators as strings, return the result of applying said operators', () => {
    it('[5, 6, 7, 8, 9], [" + ", " - "] equals to 3', () => {
      evaulate([5, 6, 7, 8, 9], ['+', '-']).should.equal(3);
    });
    it('[17, 61, 40, 24, 38, 14], ["+", " % "] equals to 38', () => {
      evaulate([17, 61, 40, 24, 38, 14], ['+', '%']).should.equal(38);
    });
    it('[20, 2, 4, 24, 12, 3], [" * ", " / "] equals to 60', () => {
      evaulate([20, 2, 4, 24, 12, 3], ['*', '/']).should.equal(60);
    });
    it('[11, 4, 10, 17, 2], [" * ", " * ", " % "] equals to 30', () => {
      evaulate([11, 4, 10, 17, 2], ['*', '*', '%']).should.equal(30);
    });
    it('[33, 11, 29, 13], [" / ", " - "] equals to -2', () => {
      evaulate([33, 11, 29, 13], ['/', '-']).should.equal(-2);
    });
  })
});