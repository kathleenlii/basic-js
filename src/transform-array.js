const { NotImplementedError } = require('../extensions/index.js');

 function transform(arr) {
  const DOUBLE_NEXT = "--double-next";
  const DOUBLE_PREV = "--double-prev";
  const DISCARD_PREV = "--discard-prev";
  const DISCARD_NEXT = "--discard-next";

  const transformString = [DOUBLE_NEXT, DOUBLE_PREV, DISCARD_PREV, DISCARD_NEXT];

  const transformArray = []

  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  arr.forEach((value, index) => {
    if (value == DOUBLE_NEXT && (index + 1 < arr.length))
      transformArray.push(arr[index + 1]);
    if (value == DOUBLE_PREV && (index - 1 >= 0) && (arr[index - 2] !== DISCARD_NEXT))
      transformArray.push(arr[index - 1]);
    if (value == DISCARD_PREV && (index - 1 < arr.length) && (arr[index - 2] !== DISCARD_NEXT))
      transformArray.pop();
    if (!transformString.includes(value) && arr[index - 1] !== DISCARD_NEXT)
      transformArray.push(value);
  });
  return transformArray;
};

module.exports = {
  transform
}