import { Should } from "chai";
import { areAnagrams } from "./AnagramChecker.ts";

Should();

describe('Anagram Checker', () => {
  describe('Determine if a string is an anagram of another', () => {
    it('listen and silent are anagrams', () => {
      areAnagrams('listen', 'silent').should.equal(true);
    });
    it('School master and The classroom are anagrams', () => {
      areAnagrams('School master', 'The classroom').should.equal(true);
    });
    it('A gentleman and Elegant man are anagrams', () => {
      areAnagrams('A gentleman', 'Elegant man').should.equal(true);
    });
    it('Hello and World are not anagrams', () => {
      areAnagrams('Hello', 'World').should.equal(false);
    });
    it('apple and banana are not anagrams', () => {
      areAnagrams('apple', 'banana').should.equal(false);
    });
    it('cat and dog are not anagrams', () => {
      areAnagrams('cat', 'dog').should.be.equal(false);
    });
  })
});