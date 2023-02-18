const numbers = [-6, 2, 3, -7, 5];

const boolArr = numbers.map((number) => (number > 0 ? true : false));

console.log(boolArr);

// -----------

const items = ["item 1", "item 2", "item 3"];

const itemEls = items.map((item) => `<li> ${item} </li>`);

const html = `<ul> ${itemEls.join("")} </ul>`;
console.log(html);

// -----------

const names = ["Ram", "Raj", "Rakesh", "Joy", "Vishal"];

const namesObjArray = names.map((name) => ({ name }));
// below is same as above
// const namesObjArray = names.map((val) => {
//   return { name: val };
// });

console.log(namesObjArray);
