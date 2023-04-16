const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 *
 */
function repeater(str, {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'} = {}) {
  str = str + '';
  addition = addition + ''
  let newStr = '';
  if (addition.length != 0) {
    if (additionRepeatTimes != 0) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        if (i == additionRepeatTimes - 1) {str += addition; continue;}
        str += addition + additionSeparator;
      }
    }
    else {
      str += addition;
    }
  }
  if (repeatTimes != 0) {
    for (let i = 0; i < repeatTimes; i++) {
      if (i == repeatTimes - 1) {newStr += str; continue;}
      newStr += str + separator;
    }
  }
  else {
    return str;
  }
  return newStr;
}

module.exports = {
  repeater
};
