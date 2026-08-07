function removeDuplicates(str) {
    let result = "";
    const seen = new Set();
    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}
const testInputs7 = ["programming", "banana", "abcdefg"];
testInputs7.forEach(text => {
    console.log(`Input: "${text}" -> Without Duplicates: "${removeDuplicates(text)}"`);
});
[OUTPUT]
Input: "programming" -> Without Duplicates: "progami"
Input: "banana" -> Without Duplicates: "ban"
Input: "abcdefg" -> Without Duplicates: "abcdefg"
