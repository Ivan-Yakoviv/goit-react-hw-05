import axios from "axios";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI1MTVjYzNjNTBjMjBlODRjMTliYjc5ZjJiODE4ZCIsIm5iZiI6MTcyMjc2NjM1MC4wNjYzMjMsInN1YiI6IjY2NThhZGQzZDlmOTE0ZjdkMDY3YzFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.biqNrCm2DNpPNz3pJcac6QWomAlPPSsTGAJEbI4xUG4";


export const fetchTrending = async () => {
   const {data} = await axios.get('/trending/movie/day');

  return data;
};

export const fetchDetails = async ({ id }) => {
   const {data} = await axios.get(`/movie/${id}`);

  return data;
};

export const fetchSearch = async ({ query }) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );

  return data;
};

export const fetchCredits = async ({ id }) => {
  const { data } = await axios.get(`/movie/${id}/credits?language=en-US`);

  return data;
};

export const fetchReviews = async ({ id, page = 1 }) => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?language=en-US&page=${page}`
  );
  
  return data;
};