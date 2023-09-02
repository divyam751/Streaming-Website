import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";

// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjJkOTdlMTYyYzkzZmY5NjBjM2FlYTUzMzZjNzZkNSIsInN1YiI6IjY0ZjJlYmU3MWYzMzE5MDExZDE2NTU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QekdQ6DMHyaueHjR7AgdK1WpmVT85OP00KOz0YfZcME";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
