let str = prompt("Enter a string:");
let count = 0;
for (let ch of str.toLowerCase()) {
  if ("aeiou".includes(ch)) {
    count++;
  }
}
console.log("Number of vowels = " + count);

Sample runs:
1. Input: hello
   Output: Number of vowels = 2

2. Input: education
   Output: Number of vowels = 5

3. Input: rhythm
   Output: Number of vowels = 0
