import { expect } from "chai";
import { buildAcronym } from "./AcronymBuilder.ts";

describe('Acronym Builder', () => {
  describe('Build an acronim from the input string', () => {
    it('input: "Search Engine Optimization" acronym: "SEO" ', () => {
      expect(buildAcronym('Search Engine Optimization')).to.equal('SEO');
    });
    it('input: "Frequently Asked Questions" acronym: "FAQ" ', () => {
      expect(buildAcronym('Frequently Asked Questions')).to.equal('FAQ');
    });
    it('input: "National Aeronautics and Space Administration" acronym: "NASA" ', () => {
      expect(buildAcronym('National Aeronautics and Space Administration')).to.equal('NASA');
    });
    it('input: "Federal Bureau of Investigation" acronym: "FBI" ', () => {
      expect(buildAcronym('Federal Bureau of Investigation')).to.equal('FBI');
    });
    it('input: "For your information" acronym: "FYI" ', () => {
      expect(buildAcronym('For your information')).to.equal('FYI');
    });
    it('input: "By the way" acronym: "BTW" ', () => {
      expect(buildAcronym('By the way')).to.equal('BTW');
    });
    it('input: "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily" acronym: "AUHWPOTIMSH" ', () => {
      expect(buildAcronym('An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily')).to.equal('AUHWPOTIMSH');
    });
  });
});