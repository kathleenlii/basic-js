const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if (!date)
    return "Unable to determine the time of year!";
  if (!(date instanceof Date) || (date.toString !== Date.prototype.toString)) {
    throw new Error()
  }
  const month = date.getMonth();

  if (month >= 2 && month <= 4)
    return "spring"
  if (month >= 5 && month <= 7)
    return "summer"
  if (month >= 8 && month <= 10)
    return "autumn"
  else
    return "winter";
};

module.exports = {
  getSeason
};