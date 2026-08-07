function fibonacciRecursive(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
function generateFibonacciSeries(terms) {
    const series = [];
    for (let i = 0; i < terms; i++) {
        series.push(fibonacciRecursive(i));
    }
    return series;
}
const testInputs5 = [5, 8, 12];
testInputs5.forEach(n => {
    console.log(`Input: Terms = ${n} -> Fibonacci Series:`, generateFibonacciSeries(n));
});

[OUTPUT]
Input: Terms = 5 -> Fibonacci Series: [ 0, 1, 1, 2, 3 ]
Input: Terms = 8 -> Fibonacci Series: [ 0, 1, 1, 2, 3, 5, 8, 13 ]
Input: Terms = 12 -> Fibonacci Series: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]

