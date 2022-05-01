const { NotImplementedError } = require('../extensions/index.js');


function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i=0; i<matrix.length; i++){
   
    for (let j=0; j<matrix[0].length;  j++){
      sum += i === 0 ? matrix[i][j] : 0;
      sum += i != 0 && matrix[i - 1][j] != 0 ? matrix[i][j] : 0;
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
