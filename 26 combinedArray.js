const number1 = [1, 2, 3];
const number2 = [4, 5, 6];

// solution 1
// const combinedNumbers = number1.concat(number2);

// solution 2
const combinedNumbers = [...number1, ...number2];

console.log(combinedNumbers);
