const arrayFromRange = (min, max) => {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(arrayFromRange(2, 7));
