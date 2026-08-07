function calculateFactorial(n) {
    if (n < 0) return "Undefined for negative numbers";
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
const testInputs4 = [0, 5, 7];
testInputs4.forEach(num => {
    console.log(`Input: n = ${num} -> Factorial:`, calculateFactorial(num));
});
[OUTPUT]
Input: n = 0 -> Factorial: 1
Input: n = 5 -> Factorial: 120
Input: n = 7 -> Factorial: 5040
