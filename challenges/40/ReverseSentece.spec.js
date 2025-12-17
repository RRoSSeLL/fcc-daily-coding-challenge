import { expect } from "chai";
import { reverseSentence } from "./ReverseSentece.ts";

describe('Reverse Sentence', () => {
  describe('Reverse the word order in a sentence', () => {
    it('world hello reversed is hello world', () => {
      expect(reverseSentence('world hello')).to.equal('hello world');
    });
    it('push commit git reversed is git commit push', () => {
      expect(reverseSentence('push commit git')).to.equal('git commit push');
    });
    it('npm  install  sudo reversed is sudo install npm', () => {
      expect(reverseSentence('npm  install  sudo')).to.equal('sudo install npm');
    });
    it('import    default   function  export reversed is export function default import', () => {
      expect(reverseSentence('import    default   function  export')).to.equal('export function default import');
    });
  });
});