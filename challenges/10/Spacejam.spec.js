import { Should } from "chai";
import { spaceJam } from "./Spacejam.ts";

Should();

describe('SpaceJam', () => {
  describe('Capitalize and space strings', () => {
    it('"freeCodeCamp" becomes "F  R  E  E  C  O  D  E  C  A  M  P"', () => {
      spaceJam('freeCodeCamp').should.equal('F  R  E  E  C  O  D  E  C  A  M  P');
    });
    it('"   free   Code   Camp   " becomes "F  R  E  E  C  O  D  E  C  A  M  P"', () => {
      spaceJam('   free   Code   Camp   ').should.equal('F  R  E  E  C  O  D  E  C  A  M  P');
    });
    it('"Hello World?!" becomes "H  E  L  L  O  W  O  R  L  D  ?  !"', () => {
      spaceJam('Hello World?!').should.equal('H  E  L  L  O  W  O  R  L  D  ?  !');
    });
    it('"C@t$ & D0g$" becomes "C  @  T  $  &  D  0  G  $"', () => {
      spaceJam('C@t$ & D0g$').should.equal('C  @  T  $  &  D  0  G  $');
    });
    it('"allyourbase" becomes "A  L  L  Y  O  U  R  B  A  S  E"', () => {
      spaceJam('allyourbase').should.equal('A  L  L  Y  O  U  R  B  A  S  E');
    });
  });
})