const CAT = "^^";

module.exports = function countCats(matrix) {
   return matrix.reduce((acc, value) => {
        return acc + value.filter(item => {
            return item === CAT
        }).length;
    }, 0);
};

