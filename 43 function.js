// function declaration
function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);

// function expression (anonymous function)
const mul = function (a, b) {
  console.log(a * b);
};
mul(3, 5);

// arrow function
const greet = (name) => {
  console.log("Hello", name);
};
greet("Vishalw");

// function declaration is attach to the window object
// e.g. window.sum()

// function expression is not attach to the window object
// e.g. window.mul() it give  error

// arrow function is not attach to the window object
// e.g. window.mul() it give  error
