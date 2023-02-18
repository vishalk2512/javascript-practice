// const evenOdd = (limit) => {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) {
//       console.log(i, "EVEN");
//     } else {
//       console.log(i, "ODD");
//     }
//   }
// };

const evenOdd = (limit) => {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
};

evenOdd(10);
