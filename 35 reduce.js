const numbers = [10, 20, 30, 40, 50];

// let sum = 0;
// for (const number of numbers) {
//   sum += number;
// }

// acc = 0 , curr = 10 => acc = 10
// acc = 10, curr = 20 => acc = 30
// acc = 30, curr = 30 => acc = 60
// acc = 60, curr = 40 => acc = 100
// acc = 100, curr = 50 => acc = 150 <== return
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
