/* Factory Function*/

// A factory function can be defined as a function that creates an object and returns it. It is similar to constructor functions/class functions.

// The factory function is a very useful tool in JavaScript since it returns the object of any class directly. We can also populate some fixed static values in these factory functions.

// These functions do not require the use of the ‘this’ keyword for inner values. Also, they do not need the ‘newnew’ keyword when initiating new objects.

// Factory functions can contain inner values, methods, and many more. They are just like normal functions but with a specific target i.e. to create objects. The only difference between a factory function and a normal function is that it returns an object with the assigned values.

// Using the Factory Functions
// Factory functions are mainly used when the user wants to initialize the object of a class multiple times with some assigned value or static values. It makes the process easy since we just have to call this function and retrieve the new object created.

function createEmpolyee(name, salary, work, performanceStatus = "Average") {
  return {
    companyName: "Vx Developer",
    name,
    salary,
    work,
    performance() {
      console.log(
        `${name} performance is ${performanceStatus} in ${salary} ₹ per year`
      );
    },
  };
}

const employee1 = createEmpolyee("Vishal", 300000, "Web developement", "Good");
const employee2 = createEmpolyee("Raj", 1000000, "IOS developement", "Average");

console.log(employee1);
console.log(employee2);

employee1.performance();
employee2.performance();
