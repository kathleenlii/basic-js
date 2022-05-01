const { NotImplementedError } = require('../extensions/index.js');


function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    let count = 0;
    for (let j = i + 1; j < names.length; j++)
      if (names[i] === names[j]) {
        count++;
        names[j] += `(${count})`
      }
  }
  return names;
}

module.exports = {
  renameFiles
};
