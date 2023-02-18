/* join method */ // (array method)
const numbers = [1, 2, 3, 4, 5];

// join method convert array into string based on specific separator
const joined1 = numbers.join();
const joined2 = numbers.join("");
const joined3 = numbers.join("-");

console.log(joined1);
console.log(joined2);
console.log(joined3);

/* split method */ // (string method)
const sentance = "Hello My name is Vishal";

// split method convert string into array based on specific separator
const splited1 = sentance.split("");
const splited2 = sentance.split(" ");

console.log(splited1);
console.log(splited2);
