import { combineReducers } from 'redux';

import filtersReducer from './filters-reducer';
import queriesReducer from './queries-reducer';
import todosReducer from './todos-reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
  query: queriesReducer,
});

export default rootReducer;
