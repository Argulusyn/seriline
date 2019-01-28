import axios from "axios";

const API = "https://api.tvmaze.com";
const searchQuery = "/search/shows?q=";

export function getShowsByQuery(query) {
  return axios.get(API + searchQuery + query).then(data => {
    return getShowsFromResponseData(data);
  });
}

function getShowsFromResponseData(responseData) {
  return responseData.data.reduce(function(result, current) {
    return result.concat(current.show);
  }, []);
}
