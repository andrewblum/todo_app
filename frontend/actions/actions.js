import * as Util from '../util/utils.js';
export const SOME_ACTION = 'SOME_ACTION';
export const ADD_TODOS = 'ADD_TODOS';
export const DELETE_TODO = 'DELETE_TODO';


export const exampleAction = (data) => ({
  type: SOME_ACTION,
  data
});

export const exampleAPIAction = (data) => dispatch => (
  Util.exampleUtil(data)
    .then(returnedData => {
      dispatch(exampleAction(returnedData));
    })
);

export const addTodos = (data) => ({
  type: ADD_TODOS,
  data
});

export const deleteTodo = (data) => ({
  type: DELETE_TODO,
  data
});

export const removeTodo = (todo) => dispatch => (
  Util.removeTodo(todo)
    .then(returned_todo => {
      dispatch(deleteTodo(todo));
    })
);

export const fetchTodos = () => dispatch => (
  Util.getTodos()
    .then(todos => {
      dispatch(addTodos(todos));
    })
);

export const updateTodo = () => dispatch => (
  Util.updateTodo()
    .then(todo => {
      dispatch(addTodos(todo));
    })
);
