import { Should } from 'chai';
import { isValidNumber } from './baseCheck.ts';

Should();

describe('Base Check', () => {
  describe('Checks if a number is valid for a given base', () => {
    it('10101 is valid for base 2', () => {
      isValidNumber('10101', 2).should.equal(true);
    });
    it('10201 is invalid for base 2', () => {
      isValidNumber('10201', 2).should.equal(false);
    });
    it('76543210 is valid for base 8', () => {
      isValidNumber('76543210', 8).should.equal(true);
    });
    it('9876543210 is invalid for base 8', () => {
      isValidNumber('9876543210', 8).should.equal(false);
    });
    it('9876543210 is valid for base 10', () => {
      isValidNumber('9876543210', 10).should.equal(true);
    });
    it('ABC is invalid for base 10', () => {
      isValidNumber('ABC', 10).should.equal(false);
    });
    it('ABC is valid for base 16', () => {
      isValidNumber('ABC', 16).should.equal(true);
    });
    it('Z is valid for base 36', () => {
      isValidNumber('Z', 36).should.equal(true);
    });
    it('ABC is valid for base 20', () => {
      isValidNumber('ABC', 20).should.equal(true);
    });
    it('4B4BA9 is valid for base 16', () => {
      isValidNumber('4B4BA9', 16).should.equal(true);
    });
    it('5G3F8F is invalid for base 16', () => {
      isValidNumber('5G3F8F', 16).should.equal(false);
    });
    it('5G3F8F is valid for base 17', () => {
      isValidNumber('5G3F8F', 17).should.equal(true);
    });
    it('abc is invalid for base 10', () => {
      isValidNumber('abc', 10).should.equal(false);
    });
    it('abc is valid for base 16', () => {
      isValidNumber('abc', 16).should.equal(true);
    });
    it('AbC is valid for base 16', () => {
      isValidNumber('AbC', 16).should.equal(true);
    });
    it('z is valid for base 36', () => {
      isValidNumber('z', 36).should.equal(true);
    });
  });
});