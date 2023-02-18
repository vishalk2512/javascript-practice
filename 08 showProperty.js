// show properties of object if valuse is string
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

const showProperties = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
};

showProperties(movie);
