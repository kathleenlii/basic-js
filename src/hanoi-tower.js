const { NotImplementedError } = require('../extensions/index.js');

 function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(3600 / turnsSpeed * turns);
  return {
    turns: turns,
    seconds: seconds
  }
};
module.exports = {
  calculateHanoi
};

