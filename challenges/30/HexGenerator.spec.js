import { expect } from "chai";
import { generateHex } from "./HexGenerator.ts";

const validateHexColorCode = /^[\da-fA-F]{6}$/;
const splitStringByTwo = /[\da-fA-F]{1,2}/g;
function parseHexValues(hexString) {
  return hexString.match(splitStringByTwo).map(item => parseInt(item, 16));
}

describe('Hex Generator', () => {
  describe('Generate random hex color strings with dominat color', () => {
    it('Yellow is an invalid color', () => {
      expect(generateHex('yellow')).to.equal('Invalid color');
    });
    it('input "red" should generate a six character string', () => {
      expect(generateHex('red')).to.have.length(6);
    });
    it('input "red" should return a valid hex color code', () => {
      expect(validateHexColorCode.test(generateHex('red'))).to.be.true;
    });
    it('input "red" should return valid hex color with higher red channel value', () => {
      const hexString = generateHex('red');
      const rgbValues = parseHexValues(hexString);
      expect(hexString).to.have.length(6);
      expect(validateHexColorCode.test(hexString)).to.be.true;
      expect(rgbValues[0]).to.be.greaterThan(rgbValues[1]);
      expect(rgbValues[0]).to.be.greaterThan(rgbValues[2]);
    });
    it('calling with input "red" two times generates different hex colors with higher red channel value', () => {
      const hexString1 = generateHex('red');
      const hexString2 = generateHex('red');
      const rgbValues1 = parseHexValues(hexString1);
      const rgbValues2 = parseHexValues(hexString2);
      expect(validateHexColorCode.test(hexString1)).to.be.true;
      expect(validateHexColorCode.test(hexString2)).to.be.true;
      expect(hexString1).to.not.equal(hexString2);
      expect(rgbValues1[0]).to.be.greaterThan(rgbValues1[1]);
      expect(rgbValues1[0]).to.be.greaterThan(rgbValues1[2]);
      expect(rgbValues2[0]).to.be.greaterThan(rgbValues2[1]);
      expect(rgbValues2[0]).to.be.greaterThan(rgbValues2[2]);

    });
    it('calling with input "green" two times generates different hex colors with higher green channel value', () => {
      const hexString1 = generateHex('green');
      const hexString2 = generateHex('green');
      const rgbValues1 = parseHexValues(hexString1);
      const rgbValues2 = parseHexValues(hexString2);
      expect(validateHexColorCode.test(hexString1)).to.be.true;
      expect(validateHexColorCode.test(hexString2)).to.be.true;
      expect(hexString1).to.not.equal(hexString2);
      expect(rgbValues1[1]).to.be.greaterThan(rgbValues1[0]);
      expect(rgbValues1[1]).to.be.greaterThan(rgbValues1[2]);
      expect(rgbValues2[1]).to.be.greaterThan(rgbValues2[0]);
      expect(rgbValues2[1]).to.be.greaterThan(rgbValues2[2]);
    });
    it('calling with input "blue" two times generates different hex colors with higher blue channel value', () => {
      const hexString1 = generateHex('blue');
      const hexString2 = generateHex('blue');
      const rgbValues1 = parseHexValues(hexString1);
      const rgbValues2 = parseHexValues(hexString2);
      expect(validateHexColorCode.test(hexString1)).to.be.true;
      expect(validateHexColorCode.test(hexString2)).to.be.true;
      expect(hexString1).to.not.equal(hexString2);
      expect(rgbValues1[2]).to.be.greaterThan(rgbValues1[0]);
      expect(rgbValues1[2]).to.be.greaterThan(rgbValues1[1]);
      expect(rgbValues2[2]).to.be.greaterThan(rgbValues2[0]);
      expect(rgbValues2[2]).to.be.greaterThan(rgbValues2[1]);
    });
  });
});