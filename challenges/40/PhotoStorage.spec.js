import { expect } from "chai";
import { numberOfPhotos } from "./PhotoStorage.ts";

describe('Photo Storage', () => {
  describe('Calcualate the number of photos for a given storage size', () => {
    it('photo size(mb): 1, storage size(gb): 1, total: 1000', () => {
      expect(numberOfPhotos(1, 1)).to.equal(1000);
    });
    it('photo size(mb): 2, storage size(gb): 1, total: 500', () => {
      expect(numberOfPhotos(2, 1)).to.equal(500);
    });
    it('photo size(mb): 4, storage size(gb): 256, total: 64000', () => {
      expect(numberOfPhotos(4, 256)).to.equal(64000);
    });
    it('photo size(mb): 3.5, storage size(gb): 750, total: 214285', () => {
      expect(numberOfPhotos(3.5, 750)).to.equal(214285);
    });
    it('photo size(mb): 3.5, storage size(gb): 5.5, total: 1571', () => {
      expect(numberOfPhotos(3.5, 5.5)).to.equal(1571);
    });
  });
});