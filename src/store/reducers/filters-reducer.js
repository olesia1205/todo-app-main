/* eslint-disable @typescript-eslint/default-param-last */
import SET_FILTER from '../constants/filters-const';

export default function filtersReducer(state = 'all', action) {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter;
    }

    default: {
      return state;
    }
  }
}
