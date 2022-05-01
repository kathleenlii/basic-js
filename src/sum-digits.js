const { NotImplementedError } = require('../extensions/index.js');


function getSumOfDigits(n) {
  let arr = [...n.toString()].map(num => parseInt(num));
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  } 

  if (sum.toString().length > 1) getSumOfDigits(sum);
  return sum;
 
}

module.exports = {
  getSumOfDigits
};
