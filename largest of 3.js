let a = parseInt(prompt("Enter first number:"), 10);
let b = parseInt(prompt("Enter second number:"), 10);
let c = parseInt(prompt("Enter third number:"), 10);
let largest = a;
if (b > largest) {
  largest = b;
}
if (c > largest) {
  largest = c;
}
console.log("Largest = " + largest);
Sample runs:
1. Input: 4, 9, 2
   Output: Largest = 9
2. Input: 15, 7, 20
   Output: Largest = 20
3. Input: 3, 3, 1
   Output: Largest = 3
