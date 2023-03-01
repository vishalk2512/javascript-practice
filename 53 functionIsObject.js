// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 6));

const add = new Function("a", "b", `return a+b`);
console.log(add(2, 6));

// function have methods and properties like object
// function have property called name, length etc and method called call, bind, apply etc.
