// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const sorted = movies
  .filter((movie) => movie.year === 2018 && movie.rating > 4)
  .sort((movieA, movieB) => movieB.rating - movieA.rating)
  .map((movie) => movie.title);

console.log(sorted);
