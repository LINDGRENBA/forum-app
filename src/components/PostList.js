import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList() {
  return (
    <React.Fragment>
      
      {/* {props.postList.map((post) => (
        <Post
          name={post.name}
          content={post.content}
          score={post.score}
          id={post.id}
          key={post.id}
          /> */}
      <Post
          name= 'Bella'
          content= 'Bella content'
          score= '0'
          id='1'
          key='1'
      />
    </React.Fragment>
  );
}  

// PostList.propTypes = {
// };
// 



  export default PostList;