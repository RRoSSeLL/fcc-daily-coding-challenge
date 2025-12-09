import { Should } from "chai";
import { isUnnaturalPrime } from "./UnnaturalPrime.ts";

Should();

describe('Unnatural Prime', () => {
  describe('Determine if a number is an unnatural prime', () => {
    it('1 is not a unnatural prime ', () => {
      isUnnaturalPrime(1).should.be.false;
    });
    it('-1 is not a unnatural prime ', () => {
      isUnnaturalPrime(-1).should.be.false;
    });
    it('19 is a unnatural prime ', () => {
      isUnnaturalPrime(19).should.be.true;
    });
    it('-23 is a unnatural prime ', () => {
      isUnnaturalPrime(-23).should.be.true;
    });
    it('0 is not a unnatural prime ', () => {
      isUnnaturalPrime(0).should.be.false;
    });
    it('97 is a unnatural prime ', () => {
      isUnnaturalPrime(97).should.be.true;
    });
    it('-61 is a unnatural prime ', () => {
      isUnnaturalPrime(-61).should.be.true;
    });
    it('99 is not a unnatural prime ', () => {
      isUnnaturalPrime(99).should.be.false;
    });
    it('-44 is not a unnatural prime ', () => {
      isUnnaturalPrime(-44).should.be.false;
    });
  });
});