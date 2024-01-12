import throttle from 'lodash/throttle';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadState, saveState } from './local-storage';
import rootReducer from './reducers';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, composeWithDevTools());

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
      });
    }),
    1000 // Throttle the saving of state to once every 1000 milliseconds (1 second)
  );
  return store;
};

export default configureStore;
