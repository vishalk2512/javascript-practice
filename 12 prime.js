// const primeNumber = (num) => {
//   let divisor = 0;
//   for (let i = 0; i <= num; i++) {
//     if (num % i === 0) {
//       divisor++;
//     }
//   }
//   if (divisor === 2) return "Prime";
//   return "Not Prime";
// };

const primeNumber = (num) => {
  let isPrime = true;
  if (num === 0 || num === 1) {
    isPrime = false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) return "Prime";
  return "Not Prime";
};

console.log(primeNumber(13));
