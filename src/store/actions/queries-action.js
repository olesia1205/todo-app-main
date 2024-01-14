import SET_QUERY from '../constants/queries-const';

const setQuery = (query) => ({
  type: SET_QUERY,
  query,
});

export default setQuery;
