
import {
  SET_ERROR_MESSAGE
} from './actionTypes';

const initialState = {
  errorMessage: '',
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      }

    default:
      return state;

  }
};
