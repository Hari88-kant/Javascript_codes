function findGCD(a, b) {
while (b !== 0) {
let temp = b;
b = a % b;
a = temp;
}
return a;
}
const testInputs2 = [[48, 18], [101, 10], [56, 98]];
testInputs2.forEach(([a, b]) => {
console.log(`Inputs: a = ${a}, b = ${b} -> GCD:`, findGCD(a, b));
});
[OUTPUT]
Inputs: a = 48, b = 18 -> GCD: 6
Inputs: a = 101, b = 10 -> GCD: 1
Inputs: a = 56, b = 98 -> GCD: 14
