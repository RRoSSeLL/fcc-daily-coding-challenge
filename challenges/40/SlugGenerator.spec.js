import { expect } from "chai";
import { generateSlug } from "./SlugGenerator.ts";

describe('Slug Generator', () => {
  describe('Given a string generate an URL-friendly version of the string', () => {
    it('string: helloWorld, slug: helloworld', () => {
      expect(generateSlug('helloWorld')).to.equal('helloworld');
    });
    it('string: hello world!, slug: hello%20world', () => {
      expect(generateSlug('hello world!')).to.equal('hello%20world');
    });
    it('string: " hello-world ", slug: helloworld', () => {
      expect(generateSlug(' hello-world ')).to.equal('helloworld');
    });
    it('string: hello  world, slug: hello%20world', () => {
      expect(generateSlug('hello  world')).to.equal('hello%20world');
    });
    it('string: "  ?H^3-1*1]0! W[0%R#1]D  ", slug: h3110%20w0r1d', () => {
      expect(generateSlug('  ?H^3-1*1]0! W[0%R#1]D  ')).to.equal('h3110%20w0r1d');
    });
  });
});