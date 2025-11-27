import { Should } from "chai";
import { squaresWithThree } from "./3Strikes.ts";

Should();

describe('Three Strikes', () => {
  describe('counts the how many squared numbers contains a 3 from 1 to number', () => {
    it('n:1  has  squared 0 with a 3', () => {
      squaresWithThree(1).should.equal(0);
    });
    it('n:10 has 1 squared with a 3', () => {
      squaresWithThree(10).should.equal(1);
    });
    it('n:100 has 19 squared with a 3', () => {
      squaresWithThree(100).should.equal(19);
    });
    it('n:1000 has 326 squared with a 3', () => {
      squaresWithThree(1000).should.equal(326);
    });
    it('n:10000 has 4531 squared with a 3', () => {
      squaresWithThree(10000).should.equal(4531);
    });
    it('n:6 has 1 squared with a 3', () => {
      squaresWithThree(6).should.equal(1);
    });
    it('n:18 has 2 squared 2 with a 3', () => {
      squaresWithThree(18).should.equal(2);
    });
  });
});