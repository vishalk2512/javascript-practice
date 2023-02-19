// Error is constructor function 'new Error()' create new object.
// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error (exception)

const greet = (name) => {
  if (typeof name !== "string") {
    throw new Error("Please pass string");
  }

  if (name.length < 2) {
    throw new Error("Name should be more than two character");
  }

  console.log("Hello", name);
};

try {
  greet();
} catch (e) {
  console.error(e.message);
} finally {
  console.log("I don't care about try and catch block");
}
