const array = [1, "", 0, 5, 4, null, undefined, false, NaN, -2];

// const countTruthy = (array) => {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       count++;
//     }
//   }
//   return count;
// };

const countTruthy = (array) => {
  let count = 0;
  for (const item of array) {
    if (item) {
      count++;
    }
  }
  return count;
};

console.log(countTruthy(array));
