const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */


function renameFiles(arr) {
  let newArr = [];
  let newName;
  let countNames = {};

  for (let item of arr) {
    if (item in countNames) {
      newName = `${item}(${countNames[item]})`;
      newArr.push(newName);
      countNames[item] = ++countNames[item];
      countNames[newName] = 1;
    }

    if (!(item in countNames)) {
      countNames[item] = 1;
      newArr.push(item);
    }
  }

  return newArr;
}

module.exports = {
  renameFiles
};
