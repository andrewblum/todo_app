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

export const createTodo = (todo) => (
  $.ajax({
    url: `api/todos/${todo.id}`,
    method: 'POST',
    data: {todo: todo}
  })
);

export const updateTodo = (todo) => (
  $.ajax({
    url: `api/todos/${todo.id}`,
    method: 'PUT',
    data: {todo: todo}
  })
);

export const deleteTodo = (todo) => (
  $.ajax({
    url: 'api/todos',
    method: 'DELETE',
    data: {todo: todo}
  })
);
