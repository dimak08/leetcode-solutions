/**
 * 6. ZigZag Conversion
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern
 *   on a given number of rows like this: (you may want to display
 *   this pattern in a fixed font for better legibility).
 *
 *   P   A   H   N
 *   A P L S I I G
 *   Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 *  Write the code that will take a string and make this conversion given a number of rows:
 *
 *  string convert(string s, int numRows);
 *
 *  Example 1:
 *
 *   Input: s = "PAYPALISHIRING", numRows = 3
 *   Output: "PAHNAPLSIIGYIR"
 *
 *  Example 2:
 *
 *   Input: s = "PAYPALISHIRING", numRows = 4
 *   Output: "PINALSIGYAHRPI"
 *   Explanation:
 *
 *   P     I    N
 *   A   L S  I G
 *   Y A   H R
 *   P     I
 *
 * Runtime: 92 ms,
 *  faster than 67.00% of JavaScript online submissions for ZigZag Conversion.
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export default function convert(s, numRows) {
  if (numRows === 1) return s;

  const resultRows = new Array(numRows).fill('');
  let direction = false; // true => up; false => down
  let offset = 0;

  for (const letter of s) {
    if (offset % (numRows - 1) === 0) {
      // change direction
      direction = !direction;
    }

    resultRows[offset] += letter;

    offset = direction ? offset + 1 : offset - 1;
  }

  return resultRows.join('');
}
