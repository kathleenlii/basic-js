const { NotImplementedError } = require("../extensions/index.js");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push(" ");
    }
    else if (value === null) {
      this.chain.push("null");
    } else {
      this.chain.push(value.toString());
    }
    return this;
  },

  removeLink(position) {
    if (position - 1 >= 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let chainResult = this.chain.map((value) => `( ${value} )`);
    this.chain = [];
    return chainResult.join("~~");
  },
};

module.exports = {
  chainMaker,
};
