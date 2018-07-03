export const exampleUtil = (somedata) => (
  $.ajax({
    url: 'api/example',
    method: 'POST',
    data: {stuff: somedata}
  })
);

export const fetchTodos = () => (
  $.ajax({
    url: 'api/todos',
    method: 'GET'
  })
);

export const createTodo = (data) => (
  $.ajax({
    url: 'api/todos',
    method: 'POST',
    data: {todo: data}
  })
);

export const updateTodo = (data) => (
  $.ajax({
    url: 'api/todos',
    method: 'PUT',
    data: {todo: data}
  })
);

export const deleteTodo = (data) => (
  $.ajax({
    url: 'api/todos',
    method: 'DELETE',
    data: {todo: data}
  })
);
