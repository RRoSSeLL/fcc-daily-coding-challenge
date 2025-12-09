import { expect } from "chai";
import { repeatVowels } from "./VowelRepeater.ts";

describe('Vowel Repeater', () => {
  describe('repeat the vowels of a string accordint to their order of appearance ', () => {
    it('hello world becomes helloo wooorld', () => {
      expect(repeatVowels('hello world')).to.equal('helloo wooorld');;
    });
    it('freeCodeCamp becomes freeeCooodeeeeCaaaaamp', () => {
      expect(repeatVowels('freeCodeCamp')).to.equal('freeeCooodeeeeCaaaaamp');;
    });
    it('AEIOU becomes AEeIiiOoooUuuuu', () => {
      expect(repeatVowels('AEIOU')).to.equal('AEeIiiOoooUuuuu');;
    });
    it('I like eating ice cream in Iceland becomes I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand', () => {
      expect(repeatVowels('I like eating ice cream in Iceland')).to.equal('I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand');;
    });
  });
});