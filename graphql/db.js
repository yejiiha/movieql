let movies = [
  {
    id: 0,
    name: "Avengers",
    score: 9,
  },
  {
    id: 1,
    name: "Aladin",
    score: 9,
  },
  {
    id: 2,
    name: "Harry potter",
    score: 10,
  },
  {
    id: 3,
    name: "Frozen",
    score: 8,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  console.log(movies);
  return newMovie;
};
