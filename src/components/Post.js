import React from 'react';
import PropTypes from 'prop-types';

function Post(props){ 
  console.log(props);
  const postTime = new Date(props.timestamp)
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{postTime.toString()}</p>
        <p>{props.content}</p>
        <p>{props.score}</p>
      </div> 
      <div>
        <button onClick={() => props.whenUpvote(props.id)}>Upvote</button>
        <button onClick={() => props.whenDownvote(props.id)}>Downvote</button>
      </div>
      <hr/>
    </React.Fragment>
  );
}



Post.propTypes = {
  name:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
  score:PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenPostClicked: PropTypes.func,
  whenUpvote: PropTypes.func,
  whenDownvote: PropTypes.func
};

export default Post;