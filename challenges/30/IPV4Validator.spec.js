import { expect } from "chai";
import { isValidIPv4 } from "./IPv4Validator.ts";

describe('IPv4 Validator', () => {
  describe('determine if a string has a valid IPv4 value', () => {
    it('192.168.1.1 is a valid IP ', () => {
      expect(isValidIPv4('192.168.1.1')).to.be.true;
    });
    it('0.0.0.0 is a valid IP ', () => {
      expect(isValidIPv4('0.0.0.0')).to.be.true;
    });
    it('255.01.50.111 is not a valid IP ', () => {
      expect(isValidIPv4('255.01.50.111')).to.be.false;
    });
    it('255.00.50.111 is not a valid IP ', () => {
      expect(isValidIPv4('255.00.50.111')).to.be.false;
    });
    it('256.101.50.115 is not a valid IP ', () => {
      expect(isValidIPv4('256.101.50.115')).to.be.false;
    });
    it('192.168.101. is not a valid IP ', () => {
      expect(isValidIPv4('192.168.101.')).to.be.false;
    });
    it('192168145213 is not a valid IP ', () => {
      expect(isValidIPv4('192168145213')).to.be.false;
    });
  });
});