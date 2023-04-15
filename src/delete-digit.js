const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let max = 0;
  let newNum;
  let strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    newNum = strNum.split('');
    newNum[i] = '';
    newNum = newNum.join('').trim();
    max = Math.max(max, newNum);
  }
  return max;
}

module.exports = {
  deleteDigit
};
