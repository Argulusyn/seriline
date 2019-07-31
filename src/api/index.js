import axios from 'axios';
import { API, SEARCH_QUERY_PREFIX } from '../constants';

const getShowsFromResponseData = responseData =>
  responseData.data.reduce((result, current) => result.concat(current.show), []);

export const getShowsByQuery = async query => {
  const responseData = await axios.get(API + SEARCH_QUERY_PREFIX + query);

  return getShowsFromResponseData(responseData);
};
