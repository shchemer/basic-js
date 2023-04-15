const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str += ' ';
  let prevChar;
  let count = 0;
  str = str
           .split('')
           .reduce((acc, char) => {
            if (!prevChar) {prevChar = char; count++; return acc}
            if (prevChar != char) {
              acc += (count > 1) ? count + prevChar : prevChar; 
              prevChar = char;
              count = 0;
            }
            if (prevChar == char) {count++; return acc};
           }
           ,'');
  return str;
}

module.exports = {
  encodeLine
};
