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
