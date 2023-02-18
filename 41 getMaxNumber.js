const numbers = [10, 30, 230, 45, 8, 12];

// acc = 10 , curr = 30 => acc = 30
// acc = 30 , curr = 230 => acc = 230
// acc = 230 , curr = 45 => acc = 230
// acc = 230 , curr = 8 => acc = 230
// acc = 230, curr = 12 => acc = 230 <== return

const getMax = (array) => array.reduce((a, b) => (a > b ? a : b));
// const getMax = (array) => array.reduce((b, a) => (a > b ? a : b));

// const getMax = (array) => {
//   return array.reduce((acc, curr) => {
//     return (acc = curr > acc ? curr : acc);
//   });
// };

console.log(getMax(numbers));
