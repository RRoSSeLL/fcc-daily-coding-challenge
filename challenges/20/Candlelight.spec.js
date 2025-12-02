import { Should } from "chai";
import { burnCandles } from "./Candlelight.ts";

Should();

describe('Candlelight', () => {
  describe('Return the total number of candles burned after using N leftovers to make new candles', () => {
    it('for 7 candles using 2 to make a new one the total burned is 13', () => {
      burnCandles(7, 2).should.equal(13);
    });
    it('for 10 candles using 5 to make a new one the total burned is 12', () => {
      burnCandles(10, 5).should.equal(12);
    });
    it('for 20 candles using 3 to make a new one the total burned is 29', () => {
      burnCandles(20, 3).should.equal(29);
    });
    it('for 17 candles using 4 to make a new one the total burned is 22', () => {
      burnCandles(17, 4).should.equal(22);
    });
    it('for 2345 candles using 3 to make a new one the total burned is 3517', () => {
      burnCandles(2345, 3).should.equal(3517);
    });
  })
});