const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
  arr: [],
  getLength() {
    return this.length;
  },
  addLink(n) {
    if (typeof n === 'undefined') n = '';
    this.arr.push(n + '');
    this.length++;
    return this;
  },
  removeLink(n) {
    if (!this.arr[n-1]) {
      this.arr = [];
      this.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.arr.splice(n-1, 1);
    this.length--;
    this.arr.length = this.length;
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let returnedArr = this.arr
                  .map(item => `( ${item} )`)
                  .join('~~');
    this.arr = [];
    this.length = 0;
    return returnedArr;
  }
};

module.exports = {
  chainMaker
};
