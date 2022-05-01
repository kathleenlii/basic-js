const { NotImplementedError } = require('../extensions/index.js');


const minesweeper = matrix => {
  let result = [];

  matrix.forEach((row, i) => {
    result.push([]);

    row.forEach((cell, j) => {
      result[i].push(0);

      if (i > 0) {
        if (j > 0 && matrix[i - 1][j - 1]) {
          result[i][j] += 1;
        }
        
        if (matrix[i - 1][j]) {
          result[i][j] += 1;
        }

        if (j < row.length - 1 && matrix[i - 1][j + 1]) {
          result[i][j] += 1;
        }
      }

      if (i < matrix.length - 1) {
        if (j > 0 && matrix[i + 1][j - 1]) {
          result[i][j] += 1;
        }

        if (matrix[i + 1][j]) {
          result[i][j] += 1;
        }

        if (j < row.length - 1 && matrix[i + 1][j + 1]) {
          result[i][j] += 1;
        }
      }

      if (j > 0 && matrix[i][j - 1]) {
        result[i][j] += 1;
      }

      if (j < row.length - 1 && matrix[i][j + 1]) {
        result[i][j] += 1;
      }
    });
  });

  return result;
};

module.exports = {
  minesweeper
};
