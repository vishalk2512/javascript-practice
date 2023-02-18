const numbers = [1, 2, 3, 4, 5, 3, 1, 3, 3];

// solution 1
const except = (array, excluded) => {
  return array.filter((item) => !excluded.includes(item));
};

// solution 2
// const except = (array, excluded) => {
//   const arr = [];
//   for (const item of array) {
//     if (!excluded.includes(item)) {
//       arr.push(item);
//     }
//   }
//   return arr;
// };

console.log(except(numbers, [3, 1]));
