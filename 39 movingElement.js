const numbers = [1, 2, 3, 4, 5, 6];

const move = (array, index, offset) => {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid Offset");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
};

console.log(move(numbers, 1, 3));
console.log(move(numbers, 3, -2));
// console.log(move(numbers, 3, -4));
// console.log(move(numbers, 3, 4));
