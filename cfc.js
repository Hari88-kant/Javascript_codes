function countCharacterFrequency(str) {
    const frequencyMap = {};
    for (let char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    return frequencyMap;
}
const testInputs6 = ["hello", "javascript", "aabbccdd"];
testInputs6.forEach(text => {
    console.log(`Input: "${text}" -> Frequency:`, countCharacterFrequency(text));
});
[OUTPUT]
Input: "hello" -> Frequency: { h: 1, e: 1, l: 2, o: 1 }
Input: "javascript" -> Frequency: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
Input: "aabbccdd" -> Frequency: { a: 2, b: 2, c: 2, d: 2 }
