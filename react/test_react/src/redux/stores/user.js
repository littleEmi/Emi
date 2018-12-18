import { createStore } from 'redux';
import { reducer } from '../reducers/user';

export let store = createStore(reducer)
