const numbers = [1, 2, 3, 4];

// solution 1
// const includes = (array, searchElement) => array.indexOf(searchElement) !== -1;

// solution 2
const includes = (array, searchElement) => {
  for (const element of array) {
    if (element === searchElement) {
      return true;
    }
  }
  return false;
};

console.log(includes(numbers, 9));
console.log(includes(numbers, 2));
