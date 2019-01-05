import { expect } from 'chai';
import twoSum from './1.two-sums';

describe('Two sums', () => {
  it('numbers [3, 2, 4] with target 6 should be [1, 2]', () => {
    expect(twoSum([3, 2, 4], 6)).to.be.deep.equal([1, 2]);
  });

  it('numbers [0, 4, 3, 0] with target 0 should be [0, 3]', () => {
    expect(twoSum([0, 4, 3, 0], 0)).to.be.deep.equal([0, 3]);
  });

  it('numbers [2, 7, 11, 15] with target 9 should be [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.be.deep.equal([0, 1]);
  });
});
