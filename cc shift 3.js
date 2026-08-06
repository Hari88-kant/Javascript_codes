let message = prompt("Enter a message:");
let result = "";
for (let ch of message) {
  if (ch >= 'a' && ch <= 'z') {
    result += String.fromCharCode(
      ((ch.charCodeAt(0) - 97 + 3) % 26) + 97
    );
  } else if (ch >= 'A' && ch <= 'Z') {
    result += String.fromCharCode(
      ((ch.charCodeAt(0) - 65 + 3) % 26) + 65
    );
  } else {
    result += ch;
  }
}
console.log("Encrypted message = " + result);

Sample runs:
1. Input: HELLO
   Output: Encrypted message = KHOOR

2. Input: abc
   Output: Encrypted message = def

3. Input: Java Script
   Output: Encrypted message = Mdyd Vfulsw



