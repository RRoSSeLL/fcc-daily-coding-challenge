import { should } from 'chai';
import { isBalanced } from './VowelBalance.ts';

should();

describe('Vowel Balance', () => {
  describe('Shows if a string is has the same number of bowels in both halfs of the sentence', () => {
    it('reacecar is balanced', () => {
      isBalanced('racecar').should.equal(true);
    });
    it('Lorem Ipsum is balanced', () => {
      isBalanced('Lorem Ipsum').should.equal(true);
    });
    it('Kitty Ipsum is not balanced', () => {
      isBalanced('Kitty Ipsum').should.equal(false);
    });
    it('string is not balanced', () => {
      isBalanced('string').should.equal(false);
    });
    it('" " is balanced', () => {
      isBalanced(' ').should.equal(true);
    });
    it('abcdefghijklmnopqrstuvwxyz is not balanced', () => {
      isBalanced('abcdefghijklmnopqrstuvwxyz').should.equal(false);
    });
    it('123A#b!E&*456-o.U is balanced', () => {
      isBalanced('123A#b!E&*456-o.U').should.equal(true);
    });
  })
});