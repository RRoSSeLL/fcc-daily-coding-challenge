import { Should } from "chai";
import { jbelmu } from "./Jbelmud.ts";

Should();

describe('Jbelmud', () => {
  describe('Jumble each word in a string', () => {
    it('"hello world" jumbled is "hello wlord"', () => {
      jbelmu('hello world').should.equal('hello wlord');
    });
    it('"i love jumbled text" jumbled is "i love jbelmud text"', () => {
      jbelmu('i love jumbled text').should.equal('i love jbelmud text');
    });
    it('"freecodecamp is my favorite place to learn to code" jumbled is "faccdeeemorp is my faiortve pacle to laern to cdoe"', () => {
      jbelmu('freecodecamp is my favorite place to learn to code').should.equal('faccdeeemorp is my faiortve pacle to laern to cdoe');
    });
    it('"the quick brown fox jumps over the lazy dog" jumbled is "the qciuk borwn fox jmpus oevr the lazy dog"', () => {
      jbelmu('the quick brown fox jumps over the lazy dog').should.equal('the qciuk borwn fox jmpus oevr the lazy dog');
    });
  });
});