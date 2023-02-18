const numbers = [10, 58, 3, 450, 203];

const minNumber = () => {
  return Math.min(...numbers);
};

// const minNumber = () => {
//   let min = numbers[0];
//   numbers.forEach((number) => {
//     if (number < min) {
//       min = number;
//     }
//   });
//   return min;
// };

// const minNumber = () => {
//   let min = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }
//   return min;
// };

// const minNumber = () => {
//   numbers.sort((a, b) => a - b);
//   return numbers[0];
// };

console.log(minNumber());
