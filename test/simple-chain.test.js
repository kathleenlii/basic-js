const { NotImplementedError } = require("../extensions/index.js");




const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push((String(value)) ? '( ' + String(value) + ' )' : '( )');
    return this;
 },

  removeLink(position) {
    if (
      typeof position != "number" ||
      position <= 0 ||
      this.chain.length < position
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
