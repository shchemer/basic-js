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

console.log((repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' })));
console.log((repeater(-222, { repeatTimes: 4, separator: '||', addition: new Map(), additionRepeatTimes: 3, additionSeparator: '&&' })));
console.log(((repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' }))));
console.log(((repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))));
console.log(((repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))));

module.exports = {
  repeater
};
