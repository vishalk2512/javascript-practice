const items = [3, 4];

// add items at the end

items.push(5, 6);

// add items at the start

items.unshift(1, 2);

// add item at the middle

items.splice(3, 0, "a", "b");

console.log(items);
