function xorCipher(text, key) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(charCode);
    }
    return result;
}
const testInputs10 = [
    { text: "Hello World!", key: "K" },
    { text: "JavaScript Encryption", key: "SecretKey" },
    { text: "Data Security 101", key: "Pass123" }
];
testInputs10.forEach(({ text, key }) => {
    const encrypted = xorCipher(text, key);
    const decrypted = xorCipher(encrypted, key);

    console.log(`Input Text : ${text}`);
    console.log(`Input Key  : ${key}`);
    console.log(`Encrypted  : ${encrypted}`);
    console.log(`Decrypted  : ${decrypted}
`);
});
[OUTPUT]
Input Text : Hello World!
Input Key  : K
Encrypted  : #$%'(+$.-%*
Decrypted  : Hello World!

Input Text : JavaScript Encryption
Input Key  : SecretKey
Encrypted  :                     
Decrypted  : JavaScript Encryption

Input Text : Data Security 101
Input Key  : Pass123
Encrypted  :     #       , ,
Decrypted  : Data Security 101
