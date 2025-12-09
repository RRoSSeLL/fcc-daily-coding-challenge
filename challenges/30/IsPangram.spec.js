import { expect } from "chai";
import { isPangram } from "./IsPangram.ts";

describe('Pangram', () => {
  describe('Determine if a string uses only the character provided', () => {
    it('hello is a panagram of helo', () => {
      expect(isPangram('hello', 'helo')).to.be.true;
    });
    it('hello is not a panagram of hel', () => {
      expect(isPangram('hello', 'hel')).to.be.false;
    });
    it('hello is not a panagram of helow', () => {
      expect(isPangram('hello', 'helow')).to.be.false;
    });
    it('hello world is a panagram of helowrd', () => {
      expect(isPangram('hello world', 'helowrd')).to.be.true;
    });
    it('Hello World! is a panagram of helowrd', () => {
      expect(isPangram('Hello World!', 'helowrd')).to.be.true;
    });
    it('Hello World! is not a panagram of heliowrd', () => {
      expect(isPangram('Hello World!', 'heliowrd')).to.be.false;
    });
    it('freeCodeCamp is not a panagram of frcdmp', () => {
      expect(isPangram('freeCodeCamp', 'frcdmp')).to.be.false;
    });
    it('The quick brown fox jumps over the lazy dog. is a panagram of abcdefghijklmnopqrstuvwxyz', () => {
      expect(isPangram('The quick brown fox jumps over the lazy dog.', 'abcdefghijklmnopqrstuvwxyz')).to.be.true;
    });
  });
});