const apikey = '706e9ac820d27ceb27bac7f3745b40f9';

export const baseImagePath = (size, path) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
export const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;

export const searchMovies = (keyword) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};

export const movieDetails = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
};

export const movieCastDetails = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
};
