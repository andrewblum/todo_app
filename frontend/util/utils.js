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
    method: 'PATCH',
    data: {todo: todo}
  })
);

export const deleteTodo = (todo) => (
  $.ajax({
    url: `api/todos/${todo.id}`,
    method: 'DELETE',
    data: {todo: todo}
  })
);
