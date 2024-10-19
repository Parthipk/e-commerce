import { createStore } from 'redux';
import reducer from './Reducer';

// Create the Redux store
const store = createStore(reducer);

export default store;
