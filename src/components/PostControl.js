import React from 'react';
import PostAdd from './PostAdd';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';
import PostList from './PostList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedTicket: null,
      editing: false
    };
  }
  
  // handleAddingNewPostToList = (newPost) => {

  // }


  render() {

    let currentlyVisibleState = null;
    let buttonText = null;

    currentlyVisibleState = < PostList />;
    buttonText = "Return to List"

    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <button >{buttonText}</button>
        <br/>
        <PostAdd />
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  mainPostList: PropTypes.object
}

const mapStateToProps = state => {
  const sortedPostList = state
  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  } 
}

PostControl = connect(mapStateToProps)(PostControl);
export default PostControl;

data = {
1: {name: 'Steve',
content: 'Cat meme',
timestamp: Date.now(),
score: 10
},
2: {name: 'Jessica',
content: 'Cat picture',
timestamp: Date.now(),
score: 19
},
3: {name: 'John',
content: 'Cat video',
timestamp: Date.now(),
score: 25
}
}