// object is not iterable

const circle = {
  redius: 1,
  color: "red",
};

for (const key in circle) {
  console.log(key, circle[key]);
}

for (const key of Object.keys(circle)) {
  console.log(key);
}

for (const value of Object.values(circle)) {
  console.log(value);
}

for (const entry of Object.entries(circle)) {
  console.log(entry);
}

if ("color" in circle) {
  console.log("yes");
}
