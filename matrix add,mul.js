function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return result;
}
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
    const result = [];
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
const matrixSet1 = {
    A: [[1, 2], [3, 4]],
    B: [[5, 6], [7, 8]]
};
const matrixSet2 = {
    A: [[2, 0], [1, 3]],
    B: [[1, 1], [0, 2]]
};
const matrixSet3 = {
    A: [[9, 8], [7, 6]],
    B: [[1, 2], [3, 4]]
};
const testInputs9 = [matrixSet1, matrixSet2, matrixSet3];
testInputs9.forEach((set, index) => {
    console.log(`--- Test Set ${index + 1} ---`);
    console.log("Input Matrix A:", JSON.stringify(set.A));
    console.log("Input Matrix B:", JSON.stringify(set.B));
    console.log("Addition Result:", addMatrices(set.A, set.B));
    console.log("Multiplication Result:", multiplyMatrices(set.A, set.B));
});
[OUTPUT]
--- Test Set 1 ---
Input Matrix A: [[1,2],[3,4]]
Input Matrix B: [[5,6],[7,8]]
Addition Result: [ [ 6, 8 ], [ 10, 12 ] ]
Multiplication Result: [ [ 19, 22 ], [ 43, 50 ] ]

--- Test Set 2 ---
Input Matrix A: [[2,0],[1,3]]
Input Matrix B: [[1,1],[0,2]]
Addition Result: [ [ 3, 1 ], [ 1, 5 ] ]
Multiplication Result: [ [ 2, 2 ], [ 1, 7 ] ]

--- Test Set 3 ---
Input Matrix A: [[9,8],[7,6]]
Input Matrix B: [[1,2],[3,4]]
Addition Result: [ [ 10, 10 ], [ 10, 10 ] ]
Multiplication Result: [ [ 33, 50 ], [ 25, 38 ] ]
