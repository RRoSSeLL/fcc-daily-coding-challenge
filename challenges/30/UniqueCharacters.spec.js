import { expect } from "chai";
import { allUnique } from "./UniqueCharacters.ts";

describe('Unique Characters', () => {
  describe('Determine if all characters in a string are unique', () => {
    it('"abc" has only unique characters', () => {
      expect(allUnique('abc')).to.be.true;
    });
    it('"aA" has only unique characters', () => {
      expect(allUnique('aA')).to.be.true;
    });
    it('"QwErTy123!@" has only unique characters', () => {
      expect(allUnique('QwErTy123!@')).to.be.true;
    });
    it('"~!@#$%^&*()_+" has only unique characters', () => {
      expect(allUnique('~!@#$%^&*()_+')).to.be.true;
    });
    it('"hello" doesn\'t have only unique characters', () => {
      expect(allUnique('hello')).to.be.false;
    });
    it('"freeCodeCamp" doesn\'t have only unique characters', () => {
      expect(allUnique('freeCodeCamp')).to.be.false;
    });
    it('"!@#*$%^&*()aA" doesn\'t have only unique characters', () => {
      expect(allUnique('!@#*$%^&*()aA')).to.be.false;
    });
  });
});