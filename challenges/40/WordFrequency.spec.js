import { expect } from "chai";
import { getWords } from "./WordFrequency.ts";

describe('Word Frequency', () => {
  describe('Count word frequency and return the 3 that appear the most', () => {
    it('innput: Coding in Python is fun because coding Python allows for coding in Python easily while coding, output: ["coding", "python", "in"]', () => {
      expect(getWords('Coding in Python is fun because coding Python allows for coding in Python easily while coding')).to.eql(["coding", "python", "in"]);
    });
    it('innput: I like coding. I like testing. I love debugging!, output: ["i", "like", "coding"]', () => {
      expect(getWords('I like coding. I like testing. I love debugging!')).to.eql(["i", "like", "coding"]);
    });
    it('innput: Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!, output: ["debug", "test", "deploy"]', () => {
      expect(getWords('Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!')).to.eql(["debug", "test", "deploy"]);
    });
  });
});