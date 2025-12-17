import { expect } from "chai";
import { arrayDiff } from "./ArrayDiff.ts";

describe('Array Diff', () => {
  describe('return unique elements from two arrays sorted alphabetically', () => {
    it('["apple", "banana"], ["apple", "banana", "cherry"]  unique: ["cherry"]', () => {
      expect(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])).to.eql(["cherry"]);
    });
    it('["apple", "banana", "cherry"], ["apple", "banana"]  unique: ["cherry"]', () => {
      expect(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"])).to.eql(["cherry"]);
    });
    it('["one", "two", "three", "four", "six"], ["one", "three", "eight"]  unique: ["eight", "four", "six", "two"]', () => {
      expect(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])).to.eql(["eight", "four", "six", "two"]);
    });
    it('["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]  unique: ["five", "one", "seven", "three"]', () => {
      expect(arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"])).to.eql(["five", "one", "seven", "three"]);
    });
    it('["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]  unique: ["freeCodeCamp", "rocks"]', () => {
      expect(arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"])).to.eql(["freeCodeCamp", "rocks"]);
    });
  });
});