const { NotImplementedError } = require('../extensions/index.js');


function encodeLine(str) {
  let result = "";
    for (let i = 0; i < str.split("").length; i++) {
      let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    count > 1 ? (result += count + str[i]) : (result += str[i]);
  }
  return result;
}

module.exports = {
  encodeLine
};
