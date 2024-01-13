/* eslint-disable @typescript-eslint/default-param-last */
import SET_QUERY from '../constants/queries-const';

export default function queriesReducer(state = '', action) {
  switch (action.type) {
    case SET_QUERY: {
      return action.query;
    }

    default: {
      return state;
    }
  }
}
