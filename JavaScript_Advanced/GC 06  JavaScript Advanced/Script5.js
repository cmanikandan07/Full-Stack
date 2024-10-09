// Define the array
const a = [2, 5, 7, 8, 9];

// 1. Find the addition of all elements
const sum = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// 2. Find the binary conversion of all elements
const binaryConversions = a.map(num => num.toString(2));

// 3. Find out even and odd numbers without using Math.max() & Math.min()
const evenNumbers = [];
const oddNumbers = [];
for (let num of a) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
}

// 4. Find the maximum and minimum numbers without using Math.max() & Math.min()
let max = a[0];
let min = a[0];
for (let num of a) {
    if (num > max) {
        max = num; // Update max if current number is greater
    }
    if (num < min) {
        min = num; // Update min if current number is lesser
    }
}

// Prepare results for display
const resultsDiv = document.getElementById('results');
resultsDiv.innerHTML = `
    <div class="result">Sum of elements: ${sum}</div>
    <div class="result">Binary conversions: ${binaryConversions.join(', ')}</div>
    <div class="result">Even numbers: ${evenNumbers.join(', ')}</div>
    <div class="result">Odd numbers: ${oddNumbers.join(', ')}</div>
    <div class="result">Maximum number: ${max}</div>
    <div class="result">Minimum number: ${min}</div>
`;
