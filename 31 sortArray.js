/* Sort Method
- sort method muted array
- sort method direct not work in case sensitive string or number, you need to pass callback
*/

// sort string array which all are first-letter is uppercase
const names = ["Vishal", "Gunjan", "Ram", "Ajay", "John"];
names.sort();
console.log(names);

// sort number
const numbers = [2, 11, 56, 7, 10, 9, 87];
numbers.sort((a, b) => a - b);
console.log(numbers);

// sort array of object
const courses = [
  { id: 1, name: "javascript" },
  { id: 2, name: "Node" },
  { id: 3, name: "react" },
  { id: 4, name: "HTML" },
  { id: 5, name: "CSS" },
  { id: 6, name: "Php" },
];

// this method not work best for if string is case sensitive
// courses.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });

// this method work best  for if string is case sensitive
courses.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA > nameB) return 1;
  if (nameA < nameB) return -1;

  return 0;
});

console.log(courses);
