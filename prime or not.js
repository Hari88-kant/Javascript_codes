function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
const testInputs1 = [1, 17, 24];
testInputs1.forEach(num => {
    console.log(`Is ${num} prime?`, isPrime(num));
});
Output:
Is 1 prime? false
Is 17 prime? true
Is 24 prime? false
