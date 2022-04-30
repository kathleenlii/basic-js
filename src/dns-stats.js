const { NotImplementedError } = require('../extensions/index.js');

  function getDNSStats(domains) {
    let result  = {};
    domains.forEach((domen ) => {
      for (let i = 0; i < domen .split(".").length; i++) {
        let j = '.' + domen .split(".").slice(i).reverse().join(".");
        [j] in result  ? result [j]++ : (result [j] = 1);
      }
    });
    return result;
  }

module.exports = {
  getDNSStats
};
