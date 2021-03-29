module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members))
    return false;
  return members
    .filter(value => typeof value === "string")
    .map(value => value.trim()[0].toUpperCase())
    .sort().join("");
};

