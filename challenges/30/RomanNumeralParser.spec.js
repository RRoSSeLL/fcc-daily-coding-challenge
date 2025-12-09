import { expect } from "chai";
import { parseRomanNumeral } from "./RomanNumeralParser.ts";

describe('Roman Numeral Parser', () => {
  describe('Calculate the number value in a string containing a Roman Numeral', () => {
    it('III is 3', () => {
      expect(parseRomanNumeral('III')).to.equal(3);
    });
    it('IV is 4', () => {
      expect(parseRomanNumeral('IV')).to.equal(4);
    });
    it('XXVI is 26', () => {
      expect(parseRomanNumeral('XXVI')).to.equal(26);
    });
    it('XCIX is 99', () => {
      expect(parseRomanNumeral('XCIX')).to.equal(99);
    });
    it('CDLX is 460', () => {
      expect(parseRomanNumeral('CDLX')).to.equal(460);
    });
    it('DIV is 504', () => {
      expect(parseRomanNumeral('DIV')).to.equal(504);
    });
    it('MMXXV is 2025', () => {
      expect(parseRomanNumeral('MMXXV')).to.equal(2025);
    });
  });
});