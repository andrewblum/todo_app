import * as Util from '../util/utils.js';

export const exampleAction = (data) => ({
  type: 'someaction',
  data
});

export const exampleAPIAction = (data) => dispatch => (
  Util.exampleUtil(data)
    .then(returnedData => {
      dispatch(exampleAction(returnedData));
    })
);

export const addTodos = (data) => ({
  type: 'ADDTODOS',
  data
});

export const fetchTodos = () => dispatch => (
  Util.getTodos()
    .then(todos => {
      dispatch(addTodos(todos));
    })
);
