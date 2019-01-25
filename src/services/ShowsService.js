import axios from "axios";

const API = "http://api.tvmaze.com";
const searchQuery = "/search/shows?q=";

export function getShowsByQuery(query) {
  return axios.get(API + searchQuery + query);
}
