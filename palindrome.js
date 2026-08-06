let str = prompt("Enter a string:");
let reversed = str.split("").reverse().join("");
if (str === reversed) {
  console.log(str + " is a Palindrome");
} else {
  console.log(str + " is Not a Palindrome");
}

Sample runs:
1. Input: madam
   Output: madam is a Palindrome

2. Input: level
   Output: level is a Palindrome

3. Input: hello
   Output: hello is Not a Palindrome

