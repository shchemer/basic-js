const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let deepCount;
    if (Array.isArray) {count++};
    for (let subarr of arr) {
      deepCount = 0;
      if (Array.isArray(subarr)) {
        deepCount += this.calculateDepth(subarr);
        count = Math.max(count, 1 + deepCount);
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
