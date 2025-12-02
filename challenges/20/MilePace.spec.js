import { Should } from "chai";
import { milePace } from "./MilePace.ts";

Should();

describe('Mile Pace', () => {
  describe('return average time per mile', () => {
    it('average time for 3 miles in 24:00  is 08:00', () => {
      milePace(3, '24:00').should.equal('08:00');
    });
    it('average time for 1 mile in 06:45 is 06:45', () => {
      milePace(1, '06:45').should.equal('06:45');
    });
    it('average time for 2 miles in 07:00  is 03:30', () => {
      milePace(2, '07:00').should.equal('03:30');
    });
    it('average time for , 26.2 miles in 120:35 is 04:36 ', () => {
      milePace(26.2, '120:35').should.equal('04:36');
    });
  });
});