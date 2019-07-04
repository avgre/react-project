import { createStore } from 'redux';
import { initialDecks } from './data.js';

const initialState = {
  decks: initialDecks,
  searchQuery: '',
  answers: [],
};

const reducer = (state, action) => {
  if (action.type === '@@INIT') {
    return { ...state, example: 'hello' };
  }
  if (action.type === 'query') {
    return { ...state, searchQuery: action.q };
  }
  if (action.type === 'resetANS') {
    return { ...state, answers: action.payload };
  }
  if (action.type === 'ANSWER') {
    return { ...state, answers: state.answers.concat(action.value) };
  }
  if (action.type === 'ADDDECK') {
    return {
      ...state,
      decks: state.decks.concat(action.payload),
    };
  }

  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
