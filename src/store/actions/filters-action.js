import SET_FILTER from '../constants/filters-const';

const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export default setFilter;
