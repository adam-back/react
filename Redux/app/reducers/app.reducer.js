const { createStore } from Redux;
import todos from 'todo.reducer.js';

const store = createStore( todos );