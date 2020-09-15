import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no aciton type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      mainPostList: {},
      formVisibleOnPage: false
    });
  });
  
  test('Check that initial state of postListReducer matches root reducer', () => {
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches rootReducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that state of postListReducer matches rootReducer', () => {
    const action = {
      type: 'ADD_TICKET',
      name: 'Steve',
      content: 'Check out this cat meme',
      score: 0,
      id: 1,
      timestamp: Date.now()
    };
    store.dispatch(action);
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, action));
  });

});
