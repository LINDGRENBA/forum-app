import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList(props) {
  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) => {
        return <Post
          whenPostClicked={ props.onPostSelection }
          name={post.name}
          content={post.content}
          score={post.score}
          id={post.id}
          key={post.id}/>
        })}
    </React.Fragment>
  );
}  

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func // need to set up onPostSelection, need to set 
};

export default PostList;