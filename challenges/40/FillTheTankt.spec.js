import { expect } from "chai";
import { costToFill } from "./FillTheTankt.ts";

describe('Fill the tank', () => {
  describe('Calculate the cost of filling the fuel tank given ', () => {
    it('max capacity(gl): 20, current level(gl): 0, price per galon: $4.00, cost: $80.00', () => {
      expect(costToFill(20, 0, 4.00)).to.equal('$80.00');
    });
    it('max capacity(gl): 15, current level(gl): 10, price per galon: $3.50, cost: $17.50', () => {
      expect(costToFill(15, 10, 3.50)).to.equal('$17.50');
    });
    it('max capacity(gl): 18, current level(gl): 9, price per galon: $3.25, cost: $29.25', () => {
      expect(costToFill(18, 9, 3.25)).to.equal('$29.25');
    });
    it('max capacity(gl): 12, current level(gl): 12, price per galon: $4.99, cost: $0.00', () => {
      expect(costToFill(12, 12, 4.99)).to.equal('$0.00');
    });
    it('max capacity(gl): 15, current level(gl): 9.5, price per galon: $3.98, cost: $21.89', () => {
      expect(costToFill(15, 9.5, 3.98)).to.equal('$21.89');
    });
  });
});