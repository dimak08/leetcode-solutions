import { expect } from 'chai';
import longestPalindrome, { isPalindrome } from './5.longest-palindromic-substring';

describe('5. Longest Palindromic Substring', () => {
  describe('#isPalindrome helper function', () => {
    it('a is palindrome', () => {
      expect(isPalindrome('a'))
        .to.be.equal(true);
    });

    it('aa is palindrome', () => {
      expect(isPalindrome('aa'))
        .to.be.equal(true);
    });

    it('aba is palindrome', () => {
      expect(isPalindrome('aba'))
        .to.be.equal(true);
    });

    it('ranynar is palindrome', () => {
      expect(isPalindrome('ranynar'))
        .to.be.equal(true);
    });
  });

  it('Example 1. "babad" => "bab" or "aba"', () => {
    expect(longestPalindrome('babad'))
      .to.satisfy(string => string === 'aba' || string === 'bab');
  });

  it('Example 2. "cbbd" => "bb"', () => {
    expect(longestPalindrome('cbbd'))
      .to.be.equal('bb');
  });

  it('Wrong answer. "a" => "a"', () => {
    expect(longestPalindrome('a'))
      .to.be.equal('a');
  });

  it('Wrong answer. "bb" => "bb"', () => {
    expect(longestPalindrome('bb'))
      .to.be.equal('bb');
  });

  it('Wrong answer. "ccc" => "ccc"', () => {
    expect(longestPalindrome('ccc'))
      .to.be.equal('ccc');
  });

  it('Wrong answer. "cccc" => "cccc"', () => {
    expect(longestPalindrome('cccc'))
      .to.be.equal('cccc');
  });

  it('Wrong answer. 1000 symbols. Timeout', () => {
    expect(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'))
      .to.be.equal('ranynar');
  });

  it('Wrong answer. some 1000 symbols. Timeout', () => {
    expect(longestPalindrome('abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa'))
      .to.be.equal('abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa');
  });

  it('Wrong answer. empty string', () => {
    expect(longestPalindrome(''))
      .to.be.equal('');
  });

  it('Wrong answer. "tattarrattat" => "tattarrattat"', () => {
    expect(longestPalindrome('tattarrattat'))
      .to.be.equal('tattarrattat');
  });

  it('Wrong answer. "SQQSYYSQQS" => "SQQSYYSQQS"', () => {
    expect(longestPalindrome('SQQSYYSQQS'))
      .to.be.equal('SQQSYYSQQS');
  });

  it('Wrong answer. "dQQSYYSQQd" => "dQQSYYSQQd"', () => {
    expect(longestPalindrome('dQQSYYSQQd'))
      .to.be.equal('dQQSYYSQQd');
  });
});
