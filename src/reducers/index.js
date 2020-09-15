import { combineReducers } from "redux";
import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPostList: postListReducer
});

export default rootReducer;