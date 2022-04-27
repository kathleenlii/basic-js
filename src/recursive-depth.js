const { NotImplementedError } = require('../extensions/index.js');


class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ?
      (arr.length === 0 ? 1 : Math.max(...arr.map(e => this.calculateDepth(e))) + 1) : 0;
  }
};

module.exports = {
  DepthCalculator
}