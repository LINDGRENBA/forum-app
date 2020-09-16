import React from 'react';
import PropTypes from 'prop-types';

function Post(){ 
  return (
    <React.Fragment>
      <div>
        <h3>
          name: Bella
        </h3>
        <p>Timestamp</p>
        <p>Content</p>
        <p>Score</p>
      </div>
      <div>
        <button>Upvote</button>
        <button>Downvote</button>
      </div>
      <hr></hr>
    </React.Fragment>
  );
}

// Post.propTypes = {
//   name:PropTypes.string.isRequired,
//   content:PropTypes.string.isRequired,
//   score:PropTypes.number.isRequired,
  // whenPostClicked: PropTypes.func,
// };

export default Post;