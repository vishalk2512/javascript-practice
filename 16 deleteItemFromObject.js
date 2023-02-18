const person = {
  name: "Vishal",
  age: 21,
  greet() {
    console.log("Hello", this.name);
  },
};

console.log(person);

delete person.age;
delete person.greet;

console.log(person);
