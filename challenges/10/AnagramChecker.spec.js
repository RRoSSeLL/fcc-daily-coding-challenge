import { Should } from "chai";
import { areAnagrams } from "./AnagramChecker.ts";

Should();

describe('Anagram Checker', () => {
  describe('Determine if a string is an anagram of another', () => {
    it('listen and silent are anagrams', () => {
      areAnagrams('listen', 'silent').should.be.true;
    });
    it('School master and The classroom are anagrams', () => {
      areAnagrams('School master', 'The classroom').should.be.true;
    });
    it('A gentleman and Elegant man are anagrams', () => {
      areAnagrams('A gentleman', 'Elegant man').should.be.true;
    });
    it('Hello and World are not anagrams', () => {
      areAnagrams('Hello', 'World').should.be.false;
    });
    it('apple and banana are not anagrams', () => {
      areAnagrams('apple', 'banana').should.be.false;
    });
    it('cat and dog are not anagrams', () => {
      areAnagrams('cat', 'dog').should.be.be.false;
    });
  });
});