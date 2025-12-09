import { expect } from "chai";
import { rgbToHex } from "./RGBtoHex.ts";

describe('RGB to Hex', () => {
  describe('return the Hex value for an RGB string input', () => {
    it('rgb(255, 255, 255) is #ffffff', () => {
      expect(rgbToHex('rgb(255, 255, 255)')).to.equal('#ffffff');
    });
    it('rgb(1, 11, 111) is #010b6f', () => {
      expect(rgbToHex('rgb(1, 11, 111)')).to.equal('#010b6f');
    });
    it('rgb(173, 216, 230) is #add8e6', () => {
      expect(rgbToHex('rgb(173, 216, 230)')).to.equal('#add8e6');
    });
    it('rgb(79, 123, 201) is #4f7bc9', () => {
      expect(rgbToHex('rgb(79, 123, 201)')).to.equal('#4f7bc9');
    });
  });
});