import { Should } from "chai";
import { decode } from "./MessageDecoder.ts";

Should();

describe('Message Decoder', () => {
  describe('use the shift value to decode the provided string', () => {
    it('"Xlmw mw e wigvix qiwweki.", 4 decodes to "This is a secret message."', () => {
      decode('Xlmw mw e wigvix qiwweki.', 4).should.equal('This is a secret message.');
    });
    it('"Byffi Qilfx!", 20 decodes to "Hello World!"', () => {
      decode('Byffi Qilfx!', 20).should.equal('Hello World!');
    });
    it('"Zqd xnt njzx?", -1 decodes to "Are you okay?"', () => {
      decode('Zqd xnt njzx?', -1).should.equal('Are you okay?');
    });
    it('"oannLxmnLjvy", 9 decodes to "freeCodeCamp"', () => {
      decode('oannLxmnLjvy', 9).should.equal('freeCodeCamp');
    });
  });
});