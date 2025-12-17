import { expect } from "chai";
import { adjustThermostat } from "./ThermostatAdjuster.ts";

describe('Thermostat Adjuster', () => {
  describe('return heat, cool or hold depending on current and target temperature', () => {
    it('for 68, 72 it should heat', () => {
      expect(adjustThermostat(68, 72)).to.equal('heat');
    });
    it('for 75, 72 it should cool', () => {
      expect(adjustThermostat(75, 72)).to.equal('cool');
    });
    it('for 72, 72 it should hold', () => {
      expect(adjustThermostat(72, 72)).to.equal('hold');
    });
    it('for -20.5, -10.1 it should heat', () => {
      expect(adjustThermostat(-20.5, -10.1)).to.equal('heat');
    });
    it('for 100, 99.9 it should cool', () => {
      expect(adjustThermostat(100, 99.9)).to.equal('cool');
    });
    it('for 0.0, 0.0 it should hold', () => {
      expect(adjustThermostat(0.0, 0.0)).to.equal('hold');
    });
  });
});