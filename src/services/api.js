
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const BASE_URL = 'https://api.themoviedb.org/3'

export function getPopularMoviesUrl() {
  return `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
}

export function getSearchMoviesUrl(search) {
  return `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(search)}`
}


export function getGenresUrl() {
  return `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
}

export function getMoviesByGenreUrl(genreId) {
  return `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${genreId}&sort_by=popularity.desc&page=1`
}
