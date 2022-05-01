const { NotImplementedError } = require('../extensions/index.js');


function isMAC48Address(n) {
  const regex = /([0-9A-F]{2}-){5}([0-9A-F]{2})/;
  return regex.test(n);
}
module.exports = {
  isMAC48Address
};
