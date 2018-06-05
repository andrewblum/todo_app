import merge from 'lodash/merge';
import { combineReducers } from 'redux';

const entitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case 'someaction':
      newState = merge({}, state);
      return newState;
    default:
      return state;
  }
};

export default entitiesReducer;
