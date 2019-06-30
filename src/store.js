import { createStore } from 'redux';

const initialState = {
  searchQuery: '',
  min: 0,
  max: 100000,
  inStock: false,
  advancedSearch: false,
};

const reducer = (state, action) => {
  if (action.type === '@@INIT') {
    return { ...state, example: 'hello' };
  }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
