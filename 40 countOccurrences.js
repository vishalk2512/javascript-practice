const numbers = [1, 2, 3, 2, 4, 5, 6, 2, 4];

// solution 1
// const countOccurrences = (array, searchElement) => {
//   let count = 0;
//   for (let element of array) {
//     if (element === searchElement) {
//       count++;
//     }
//   }
//   return count;
// };

// solution 2
const countOccurrences = (array, searchElement) => {
  return array.reduce((acc, curr) => {
    return acc + (curr === searchElement ? 1 : 0);
  }, 0);
};

console.log(countOccurrences(numbers, 2));
console.log(countOccurrences(numbers, 4));
