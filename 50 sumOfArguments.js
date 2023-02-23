// sum the argument
// any number of arguments
// or array as argument

// solution 1
// const sum = (...items) => {
//   return items.flatMap((item) => item).reduce((a, b) => a + b);
// };

// solution 2
const sum = (...items) => {
  if (Array.isArray(items[0])) {
    items = [...items[0]];
  }
  return items.reduce((a, b) => a + b);
};

console.log(sum([1, 2, 4, 5]));
console.log(sum(1, 2, 4, 5));
