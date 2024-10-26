const TMDB_KEY = 'e8f62da5e2126af5d78d9b0d4bc4d1ce'

const requests = {
fetchTrending: `/trending/all/day?api_key=${TMDB_KEY}&language=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=${TMDB_KEY}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${TMDB_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${TMDB_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${TMDB_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${TMDB_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${TMDB_KEY}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${TMDB_KEY}&with_genres=99`,
}

export default requests;