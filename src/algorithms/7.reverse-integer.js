/**
 * 7. Reverse Integer
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *  Input: 123
 *  Output: 321
 *  Example 2:
 *
 *  Input: -123
 *  Output: -321
 *  Example 3:
 *
 *  Input: 120
 *  Output: 21
 *
 *  Note:
 *   Assume we are dealing with an environment which could only store integers
 *   within the 32-bit signed integer range: [−2^31,  2^31 − 1].
 *   For the purpose of this problem, assume that your function
 *   returns 0 when the reversed integer overflows.
 *
 * Runtime: 72 ms,
 *  faster than 90.75% of JavaScript online submissions for Reverse Integer.
 *
 * @param {number} x
 * @return {number}
 */
export default function reverse(x) {
  // check overflow
  // min: (−2^31) => -2147483648 => -8463847412
  // max: (2^31 − 1) => 2147483647 => 7463847412

  const isNegative = x < 0;
  const negativeCoefficient = isNegative ? -1 : 1;
  const int32Limit = isNegative ? 2147483648 : 2147483647;

  let number = Math.abs(x);
  let result = 0;

  while (number) {
    result = result * 10 + (number % 10);
    if (result > int32Limit) return 0;
    number = ~~(number / 10);
  }

  return negativeCoefficient * result;
}
