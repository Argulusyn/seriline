import axios from "axios";

const API = "http://api.tvmaze.com";
const searchQuery = "/search/shows?q=";

export function getShowsByQuery(query) {
  return new Promise(resolve => {
    axios.get(API + searchQuery + query).then(data => {
      resolve(getShowsFromResponseData(data));
    });
  });
}

function getShowsFromResponseData(responseData) {
  const shows = [];
  responseData.data.map(element => {
    shows.push(element.show);
  });
  return shows;
}
