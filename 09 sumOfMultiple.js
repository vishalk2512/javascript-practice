// sum of multiple of 3 and 5 between limlit(include)
// e.g if limit = 10
// multiple of 3 => 3, 6, 9
// multiple of 5 => 5, 10
// sum => 3 + 6 + 9 + 5 + 10 = 33

const sumOfMultiple = (limit) => {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};

console.log(sumOfMultiple(15));
