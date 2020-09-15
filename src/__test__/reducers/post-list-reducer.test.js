import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {
  let currentTime = Date.now()
  const currentState = {
    1: {
      name: 'Steve',
      content: 'Check out this cat meme',
      score: 0,
      id: 1,
      timestamp: currentTime
    },
    2: {
      name: 'Lisa',
      content: 'Check out Steve\'s cat music.',
      score: 0,
      id: 2,
      timestamp: currentTime
    }
  }

  let action;
  const postData = {
    name: 'Steve',
    content: 'Check out this cat meme',
    score: 0,
    id: 1,
    timestamp: currentTime
  };
  test('Should return default state if there is no action type passed into reducer', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add post to mainPostList', () => {
    const { name, content, score, id, timestamp } = postData;
    action = {
      type: 'ADD_POST',
      name: name,
      content: content,
      score: score,
      id: id,
      timestamp: timestamp
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        content: content,
        score: score,
        id: id,
        timestamp: timestamp
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        name: 'Lisa',
        content: 'Check out Steve\'s cat music.',
        score: 0,
        id: 2,
        timestamp: currentTime
      }
    });
    console.log(currentTime)
  });
});