
/**
 * Check if presented string is palindrome
 *
 * @param {String} inputString
 * @returns {boolean}
 */
export function isPalindrome(inputString) {
  const halfSize = Math.ceil(inputString.length / 2);

  for (let index = 0; index <= halfSize; index += 1) {
    if (inputString[index] !== inputString[inputString.length - 1 - index]) {
      return false;
    }
  }

  return true;

  // another resolutions:
  // return inputString === inputString.split('').reverse().join(''); // 384ms for 1000 iterations
  // return inputString === [...inputString].reverse().join(''); // 1200ms for 1000 iterations
}

/**
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 * Input: "babad"
 * Output: "bab"
 *  Note: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: "cbbd"
 * Output: "bb"
 *
 * Result: Runtime: 832 ms, faster than 22.15% of JavaScript online submissions for Longest Palindromic Substring.
 *
 * @param {string} s
 * @return {string}
 */
export default function longestPalindrome(s) {
  const inputString = s.toLocaleLowerCase();
  let longestSubstring = inputString[0] || '';
  let position = 0;
  let stringLength = 0;

  for (let i = 0; i < inputString.length; i += 1) {
    if (inputString.length - i <= longestSubstring.length) break;
    position = i;

    while (true) {
      position = inputString.indexOf(inputString[i], position + 1);

      if (position === -1) break;

      stringLength = position - i + 1;

      if (longestSubstring.length < stringLength) {
        if (isPalindrome(inputString.substr(i, stringLength))) {
          longestSubstring = s.substr(i, stringLength);
        }
      }
    }
  }

  return longestSubstring;
}
