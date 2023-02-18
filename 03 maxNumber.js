const numbers = [10, 58, 3, 450, 203];

// const maxNumber = () => {
//   return Math.max(...numbers);
// };

const maxNumber = () => {
  let max = numbers[0];
  numbers.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });
  return max;
};

// const maxNumber = () => {
//   let max = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// };

// const maxNumber = () => {
//   numbers.sort((a, b) => b - a);
//   return numbers[0];
// };

console.log(maxNumber());
