export const searchMovies = (movies, request) => {
  const requestStr = request.toLowerCase();
  const result = movies.filter((movie) => (movie.nameRU.toLowerCase().includes(requestStr) || movie.nameEN.toLowerCase().includes(requestStr)))
  return result;
}