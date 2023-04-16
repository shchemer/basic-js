const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transformFunction(newArr, i) {
  switch(newArr[i]) {
    case '--discard-next':
      if (i != newArr.length-1) {newArr.splice(i, 2);}
      else {newArr.splice(i, 1);}
      break;
    case '--discard-prev':
      if (i != 0) {newArr.splice(i-1, 2);}
      else {newArr.splice(i, 1);}
      break;
    case '--double-next':
      if (i != newArr.length-1) {newArr[i] = newArr[i + 1];}
      else {newArr.splice(i, 1);}
      break;
    case '--double-prev':
      if (i != 0) {newArr[i] = newArr[i - 1];}
      else {newArr.splice(i, 1);}
      break;
  }
  return newArr;
}

let transformFunctions = [
  '--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev'
]

function transform(arr) {
  if (!(Array.isArray(arr))) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let newArr = arr.slice(0, arr.length);
  for (let i = 0; i < newArr.length; i++) {
    if (transformFunctions.includes(newArr[i])) {
      newArr = transformFunction(newArr, i);
      if (transformFunctions.includes(newArr[i])) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr;
}


module.exports = {
  transform
};
