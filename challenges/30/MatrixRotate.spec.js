import { expect } from "chai";
import { rotate } from "./MatrixRotate.ts";

describe('Matrix Rotate', () => {
  describe('Rotate a square matrix 90deg', () => {
    it('[[1]] rotates to [[1]]', () => {
      expect(rotate([[1]])).to.have.deep.members([[1]]);
    });
    it('[[1, 2], [3, 4]] rotates to [[3, 1], [4, 2]]', () => {
      expect(rotate([[1, 2], [3, 4]])).to.have.deep.members([[3, 1], [4, 2]]);
    });
    it('[[1, 2, 3], [4, 5, 6], [7, 8, 9]] rotates to [[7, 4, 1], [8, 5, 2], [9, 6, 3]]', () => {
      expect(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).to.have.deep.members([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    });
    it('[[0, 1, 0], [1, 0, 1], [0, 0, 0]] rotates to [[0, 1, 0], [0, 0, 1], [0, 1, 0]]', () => {
      expect(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]])).to.have.deep.members([[0, 1, 0], [0, 0, 1], [0, 1, 0]]);
    });
  });
});