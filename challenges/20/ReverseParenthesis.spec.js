import { Should } from "chai";
import { decode } from "./ReverseParenthesis.ts";

Should();

describe('Reverse Parenthesis', () => {
  describe('Reverse the text between parenthesis in a string', () => {
    it('(f(b(dc)e)a) decodes to abcdef', () => {
      decode('(f(b(dc)e)a)').should.equal('abcdef');
    });
    it('((is?)(a(t d)h)e(n y( uo)r)aC) decodes to Can you read this?', () => {
      decode('((is?)(a(t d)h)e(n y( uo)r)aC)').should.equal('Can you read this?');
    });
    it('f(Ce(re))o((e(aC)m)d)p decodes to freeCodeCamp', () => {
      decode('f(Ce(re))o((e(aC)m)d)p').should.equal('freeCodeCamp');
    });
  });
});