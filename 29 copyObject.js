const person = {
  name: "Vishal",
  age: 21,
  job: {
    salary: 300000,
    position: "junior developer",
  },
};

/*  copy object by reference  */
// const anotherPerson = person;

/*  copy object by value   */
// solution 1 (shallow copy)
// const anotherPerson = { ...person };

// solution 2 (shallow copy)
// const anotherPerson = Object.assign({}, person);

// solution 3 (deep copy)
// const anotherPerson = JSON.parse(JSON.stringify(person));

// solution 4 (deep copy)
const anotherPerson = structuredClone(person);

console.log(anotherPerson);
