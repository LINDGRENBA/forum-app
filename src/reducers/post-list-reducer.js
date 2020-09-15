export default (state = {}, action) => {
  const { name, content, score, id, timestamp } = action;
  switch (action.type){
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          content: content,
          score: score,
          id: id,
          timestamp: timestamp
        }
      });
    default:
      return state;
  }
};