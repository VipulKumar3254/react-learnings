

// The find() method returns the value of the first element in an array that passes a given test. 

let numbers = [4, 9, 16, 25, 29];
let firstMultipleOfThree = numbers.find(num => num % 3 === 0);
console.log(firstMultipleOfThree); // expected output: 16