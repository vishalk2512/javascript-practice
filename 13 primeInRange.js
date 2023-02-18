// const showPrimes = (limit) => {
//   for (let i = 2; i <= limit; i++) {
//     let divisor = 0;
//     for (let j = 2; j <= i / 2; j++) {
//       if (i % j === 0) {
//         divisor++;
//       }
//     }
//     if (divisor === 0) console.log(i);
//   }
// };

const showPrimes = (limit) => {
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i / 2; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
};

showPrimes(31);
