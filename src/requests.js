const API_KEY = "6e2e71c5acfa466c4f0c394c317110c8";


const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}`,
  
  }
  
  export default requests;
