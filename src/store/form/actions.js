
import {
  SET_ERROR_MESSAGE
} from './actionTypes';

export const setErrorMessage = (errorMessage) => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: errorMessage
  }
}
