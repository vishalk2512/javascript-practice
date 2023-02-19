// global scope
let name = "Vishal";

function greet() {
  // local scope or function scope
  let name2 = "ram";
  {
    // block scope
    let name3 = "Aman";
  }
}

// avoid to use declare variable in global scope
// block scope have access to local scope and global scope.
// local scope have access to global scope.
// let and const have block scope
// var have local scope or globle scope

// when we create variable in global scope usingusing var it attached to global window object
//var color = "red";
// console.log(window.color); ==> output : red

// when we create variable in global scope using const and let, it didn't attach to global window object
