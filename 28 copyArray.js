const numbers = [1, 2, 3, 4, 5, 6];

/*  copy array by reference  */
// const anotherNumbers = numbers;

/*  copy array by value   */
// solution 1 (shallow copy)
// const anotherNumbers = [...numbers];

// solution 2 (shallow copy)
// const anotherNumbers = numbers.slice();

// solution 3 (deep copy)
const anotherNumbers = JSON.parse(JSON.stringify(numbers));

console.log(anotherNumbers);
