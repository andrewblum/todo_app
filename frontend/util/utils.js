export const exampleUtil = (somedata) => (
  $.ajax({
    url: 'api/example',
    method: 'POST',
    data: {stuff: somedata}
  })
);
