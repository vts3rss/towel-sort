module.exports = function towelSort(matrix) {
    let arr = [];
    matrix = matrix === undefined ? [] : matrix;
    for (let i = 0; i < matrix.length; i++) {
        let x = i % 2 === 0 ? matrix[i] : matrix[i].reverse();
        arr.push(...x);
    }
    return arr;
};
