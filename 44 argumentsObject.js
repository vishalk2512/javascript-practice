// arguments object hold all values where we pass in call time.
// argument object is not work with arrow function

// const sum = function () {
//   return arguments;
// };

function sum() {
  let total = 0;
  for (const value of arguments) {
    total += value;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

// argumnets is a iterable object not an array.
