import { Should } from "chai";
import { toCamelCase } from "./CamelCase.ts";

Should();

describe('Camel Case', () => {
  describe('change a string to camel case', () => {
    it('hello world changes to helloWorld', () => {
      toCamelCase('hello world').should.equal('helloWorld');
    });
    it('HELLO WORLD changes to helloWorld', () => {
      toCamelCase('HELLO WORLD').should.equal('helloWorld');
    });
    it('secret agent-X changes to secretAgentX', () => {
      toCamelCase('secret agent-X').should.equal('secretAgentX');
    });
    it('FREE cODE cAMP changes to freeCodeCamp', () => {
      toCamelCase('FREE cODE cAMP').should.equal('freeCodeCamp');
    });
    it('ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk changes to yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk', () => {
      toCamelCase('ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk').should.equal('yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk');
    });
  })
});