// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const numbers = [10, 20, 30, 40];

const isAllDividedByFive = numbers.every((number) => number % 5 === 0);

console.log(isAllDividedByFive);

// The some() method tests whether at least one element in the array pass the test implemented by the provided function. It returns a Boolean value.

const nums = [1, 2, 3, -4, 5];

const isAtLeastOneNegative = nums.some((num) => num < 0);

console.log(isAtLeastOneNegative);
