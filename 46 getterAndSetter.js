// getters => access properties
// we dont need to call function, we get as a property,
// getter function can't take parameter

// setters => change (mutate) them
// settter functio take parameter and set property outside from object
// Setters cannot return values

const person = {
  firstName: "Vishal",
  lastName: "Vansjariya",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parted = value.split(" ");
    this.firstName = parted[0];
    this.lastName = parted[1];
  },
};

console.log(person.fullName);

person.fullName = "John Deo";

console.log(person.fullName);
