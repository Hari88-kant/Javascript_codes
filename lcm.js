function findGCD(a, b) {
while (b !== 0) {
let temp = b;
b = a % b;
a = temp;
}
 return a;
}
function findLCM(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / findGCD(a, b);
}

const testInputs3 = [[12, 18], [5, 7], [15, 25]];
testInputs3.forEach(([a, b]) => {
    console.log(`Inputs: a = ${a}, b = ${b} -> LCM:`, findLCM(a, b));
});
[OUTPUT]
Inputs: a = 12, b = 18 -> LCM: 36
Inputs: a = 5, b = 7 -> LCM: 35
Inputs: a = 15, b = 25 -> LCM: 75
