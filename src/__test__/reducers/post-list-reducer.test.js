import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const postData = {
    name: 'Steve',
    content: 'Check out this cat meme',
    score: 0,
    id: 1,
    timestamp: Date.now()
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
});