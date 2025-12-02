import { Should } from "chai";
import { isUnnaturalPrime } from "./UnnaturalPrime.ts";

Should();

describe('Unnatural Prime', () => {
  describe('Determine if a number is an unnatural prime', () => {
    it('1 is not a unnatural prime ', () => {
      isUnnaturalPrime(1).should.equal(false);
    });
    it('-1 is not a unnatural prime ', () => {
      isUnnaturalPrime(-1).should.equal(false);
    });
    it('19 is a unnatural prime ', () => {
      isUnnaturalPrime(19).should.equal(true);
    });
    it('-23 is a unnatural prime ', () => {
      isUnnaturalPrime(-23).should.equal(true);
    });
    it('0 is not a unnatural prime ', () => {
      isUnnaturalPrime(0).should.equal(false);
    });
    it('97 is a unnatural prime ', () => {
      isUnnaturalPrime(97).should.equal(true);
    });
    it('-61 is a unnatural prime ', () => {
      isUnnaturalPrime(-61).should.equal(true);
    });
    it('99 is not a unnatural prime ', () => {
      isUnnaturalPrime(99).should.equal(false);
    });
    it('-44 is not a unnatural prime ', () => {
      isUnnaturalPrime(-44).should.equal(false);
    });
  });
});