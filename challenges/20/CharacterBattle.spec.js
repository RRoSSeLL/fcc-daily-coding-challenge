import { Should } from "chai";
import { battle } from "./CharacterBattle.ts";

Should();

describe('Character Battle', () => {
  describe('letters and numbers are asigned a value and battle, given two string determine the outcome', () => {
    it('"Hello", "World" the outcome is "We lost"', () => {
      battle('Hello', 'World').should.equal('We lost');
    });
    it('"pizza", "salad" the outcome is "We won"', () => {
      battle('pizza', 'salad').should.equal('We won');
    });
    it('"C@T5", "D0G$" the outcome is "We won"', () => {
      battle('C@T5', 'D0G$').should.equal('We won');
    });
    it('"kn!ght", "orc" the outcome is "Opponent retreated"', () => {
      battle('kn!ght', 'orc').should.equal('Opponent retreated');
    });
    it('"PC", "Mac" the outcome is "We retreated"', () => {
      battle('PC', 'Mac').should.equal('We retreated');
    });
    it('"Wizards", "Dragons" the outcome is "It was a tie"', () => {
      battle('Wizards', 'Dragons').should.equal('It was a tie');
    });
    it('"Mr. Smith", "Dr. Jones" the outcome is "It was a tie"', () => {
      battle('Mr. Smith', 'Dr. Jones').should.equal('It was a tie');
    });
  })
});