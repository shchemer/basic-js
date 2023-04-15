const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {
  if (str.split('-').length == 6 && isFinite(parseInt(str, 16).toString())) {
    let copyStr = str.split('-');
    copyStr = copyStr.reduce((acc, item) => {
      if (item.length == 2 && (isFinite(parseInt(item, 16))) && (isFinite(parseInt(item.split('').reverse().join(''), 16)))) {
        return acc += item + '-';
      }
      return false;
    }, '')
    return (copyStr.slice(0, copyStr.length-1) == str);
  }
  return false;
}

module.exports = {
  isMAC48Address
};
