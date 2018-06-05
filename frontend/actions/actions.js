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
