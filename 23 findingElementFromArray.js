const numbers = [1, 2, 7, 9, 7, 3];

// find item index
console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(7));

// item is include or not in array
console.log(numbers.indexOf(9) !== -1);
console.log(numbers.includes(9));

// find items form array which is reference typed
const courses = [
  { id: 1, name: "javascript" },
  { id: 2, name: "react" },
];

// it return item from array based on condition

const isAvailble = courses.findIndex((course) => course.name === "javascript");

// it return item from array based on condition

const availableItem = courses.find((course) => course.id === 2);

console.log(isAvailble);
console.log(availableItem);
