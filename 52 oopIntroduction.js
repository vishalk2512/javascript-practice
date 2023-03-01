// OOP - Object Oriented Programming

// - A programming paradigm (methedology) centered around objects rather than functions.

// - which languagus allows OOP
// e.g: JavaScript, C#, Java, Python, Ruby etc.

// Four pillars of OOP
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

// in OOP, Object have properties and method. Variable is property and function is method
// e.g localStorage is object, which have property length. and method setItem, getItem, removeItem, clear etc.

// 1. Encapsulation
// - Encapsulation can be defined as “the packing of data and functions into one component”. Packing, which is also known as bundling, grouping and binding, simply means to bring together data and the methods which operate on data. The component can be a function, a class or an object.
// e.g
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

// 2. Abstraction
// An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.
// Hide the detail and show the essentials

// 3. Inheritance
// Inheritance is mechanism to help you to eliminate the redundant code.

// 4. Polymorphism (Many Form)
// Polymorphism in JavaScript refers to the concept of reusing a single piece of code multiple times. By utilizing Polymorphism, you can define multiple forms of a method, and depending upon the runtime scenario, one type of object can have different behavior.
// The term Polymorphism is derived from the word “Polymorph,” where “Poly” means “Many” and “Morph” means “Form“. In Object-Oriented Programming, Polymorphism allows you to perform the same operation in multiple ways.

// Benefits of OOP
// - Reduce complexity, increase reusability, isolate impact of changes, eliminate redundant code etc.
