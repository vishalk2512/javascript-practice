// hoisting
// - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope(or top of the file) before code execution.

// var
// - we can redeclare and reassign.
// - it have local scope or globle scope
// - before ES6 or ECMA2015
// - when we create variable in global scope usingusing var it attached to global window object
// e.g. var color = "red";
// console.log(window.color); ==> output : red
// - Just like  var, let, const declarations are hoisted to the top. Unlike var which is initialized as undefined.
// - While var and let can be declared without being initialized,

// let
// - we can't redeclare but we can reassign
// - it have block scope
// - After ES6 or ECMA2015
// - when we create variable in global scope using let it didn't attach to global window object
// - Just like  var, let, const declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.
// - While var and let can be declared without being initialized,

// const
// - we can't redeclare or reassign
// - it have block scope
// - After ES6 or ECMA2015
// - when we create variable in global scope using const  it didn't attach to global window object
// - Just like  var, let, const declarations are hoisted to the top. Unlike var which is initialized as undefined, the const keyword is not initialized. So if you try to use a const variable before declaration, you'll get a Reference Error.
// - While var and let can be declared without being initialized, const must be initialized during declaration.
