import React from 'react';
import PropTypes from 'prop-types';

function Post(props){ 
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.timestamp}</p>
        <p>{props.content}</p>
        <p>{props.score}</p>
        <div>
          <button>Upvote</button>
          <button>Downvote</button>
        </div>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  name:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
  score:PropTypes.number.isRequired,
  whenPostClicked: PropTypes.func,
};

export default Post;