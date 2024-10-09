// Problem 1: Square of elements in array A
let A = [2, 5, 4, 7, 3];
let B = A.map(element => element * element);
console.log("Array A:", A);
console.log("Squared Array B:", B);

// Problem 2: Sum of elements in array C
let C = [45, 2, 4, 7, 85];
let sum = C.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Array C:", C);
console.log("Sum of elements in array C:", sum);

// Problem 3: Find duplicates in array D
let D = [4, 8, 6, 4, 8, 6, 1, 2, 9];
let duplicates = D.filter((item, index) => D.indexOf(item) !== index);
let uniqueDuplicates = [...new Set(duplicates)]; // Remove duplicate duplicates
console.log("Array D:", D);
console.log("Duplicate elements in array D:", uniqueDuplicates);
