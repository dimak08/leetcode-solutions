import { expect } from 'chai';
import convert from './6.zig-zag-conversion';

describe('6. ZigZag Conversion', () => {
  it('Example. s = "PAYPALISHIRING", numRows = 3 => "PAHNAPLSIIGYIR"', () => {
    expect(convert('PAYPALISHIRING', 3))
      .to.be.equal('PAHNAPLSIIGYIR');
  });

  it('Example. s = "PAYPALISHIRING", numRows = 4 => "PINALSIGYAHRPI"', () => {
   for (let i = 0; i < 1000; i++) {
     expect(convert('PAYPALISHIRING', 4))
       .to.be.equal('PINALSIGYAHRPI');
   }
  });

});
