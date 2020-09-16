import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList(props){
  return (
    <React.Fragment>
      {props.sortOrder.map((element) => //sortOrder is an array of IDs, element is a standin for each of those IDs
        <Post
          whenUpvote={ props.onUpvote }
          whenDownvote={ props.onDownvote }
          whenPostClicked={ props.onPostSelection }
          name={props.postList[element].name}
          content={props.postList[element].content}
          score={props.postList[element].score}
          timestamp={props.postList[element].timestamp}
          id={props.postList[element].id}
          key={props.postList[element].id}/>
      )}
        <p>hello test</p>
    </React.Fragment>
  );
}  

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
  sortOrder: PropTypes.array,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
};

export default PostList;