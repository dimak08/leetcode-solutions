import { expect } from 'chai';
import reverse from './7.reverse-integer';

describe('7. Reverse Integer', () => {
  it('Example. 123 => 321', () => {
    expect(reverse(123)).to.be.equal(321);
  });

  it('Example. -123 => -321', () => {
    expect(reverse(123)).to.be.equal(321);
  });

  it('Example. 120 => 21', () => {
    expect(reverse(120)).to.be.equal(21);
  });

  it('Overflow. 1534236469 => 0', () => {
    expect(reverse(1534236469)).to.be.equal(0);
  });
});
