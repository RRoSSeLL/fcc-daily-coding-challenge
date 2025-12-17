import { expect } from "chai";
import { capitalize } from "./SentenceCapitalizer.ts";

describe('Sentence Capitalizer', () => {
  describe('Capitalize all the sentences in a string', () => {
    it('this is a simple sentence. capitalized is This is a simple sentence.', () => {
      expect(capitalize('this is a simple sentence.')).to.equal('This is a simple sentence.');
    });
    it('hello world. how are you? capitalized is Hello world. How are you?', () => {
      expect(capitalize('hello world. how are you?')).to.equal('Hello world. How are you?');
    });
    it('i did today\'s coding challenge... it was fun!! capitalized is I did today\'s coding challenge... It was fun!!', () => {
      expect(capitalize('i did today\'s coding challenge... it was fun!!')).to.equal('I did today\'s coding challenge... It was fun!!');
    });
    it('crazy!!!strange???unconventional...sentences. capitalized is Crazy!!!Strange???Unconventional...Sentences.', () => {
      expect(capitalize('crazy!!!strange???unconventional...sentences.')).to.equal('Crazy!!!Strange???Unconventional...Sentences.');
    });
    it('there\'s a space before this period . why is there a space before that period ? capitalized is There\'s a space before this period . Why is there a space before that period ? ', () => {
      expect(capitalize('there\'s a space before this period . why is there a space before that period ? ')).to.equal('There\'s a space before this period . Why is there a space before that period ? ');
    });
  });
});