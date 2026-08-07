function bubbleSort(arr) {
const sortedArray = [...arr];
const n = sortedArray.length;
 for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
   if (sortedArray[j] > sortedArray[j + 1]) {
    let temp = sortedArray[j];
   sortedArray[j] = sortedArray[j + 1];
  sortedArray[j + 1] = temp;
            }
        }
    }
    return sortedArray;
}
const testInputs8 = [
    [64, 34, 25, 12, 22, 11, 90],
    [5, 2, 8, 1, 9],
    [-3, 10, 0, -15, 7]
];
testInputs8.forEach(arr => {
    console.log(`Input Array: [${arr}] -> Sorted Array: [${bubbleSort(arr)}]`);
});
[OUTPUT]
Input Array: [64,34,25,12,22,11,90] -> Sorted Array: [11,12,22,25,34,64,90]
Input Array: [5,2,8,1,9] -> Sorted Array: [1,2,5,8,9]
Input Array: [-3,10,0,-15,7] -> Sorted Array: [-15,-3,0,7,10]
