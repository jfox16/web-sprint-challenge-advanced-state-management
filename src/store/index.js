
import { combineReducers } from 'redux';
import { reducer as formReducer } from './form';
import { reducer as smurfsReducer } from './smurfs';

export const rootReducer = combineReducers({
  form: formReducer,
  smurfs: smurfsReducer
});