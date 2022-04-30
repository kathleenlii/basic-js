const { NotImplementedError } = require('../extensions/index.js');


function encodeLine(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.split("").length; i++) {
    while (str[i] === str[i + 1]) {
      count++;
    }
    count > 1 ? (result += count + str[i]) : (result += str[i]);
  }
  return result.join("");
}

module.exports = {
  encodeLine
};
