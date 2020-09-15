import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test('Should return default state if no aciton type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      mainPostList: {},
      formVisibleReducer: false
    });
  });
})