const { NotImplementedError } = require('../extensions/index.js');



function sortByHeight(arr) {
  let sort=arr.filter(e=> e!==-1).sort((a,b)=>a-b);
   for (let i=0; i<arr.length; i++){
     if (arr[i]==-1){
        sort.splice(i, 0, arr[i]);
   }
 }
  return sort;
}

module.exports = {
  sortByHeight
};
