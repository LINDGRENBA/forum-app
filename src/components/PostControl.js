import React from 'react';
import PostAdd from './PostAdd';
import PostDetail from './PostDetail';
// import PostEdit from './PostEdit';
import PostList from './PostList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedPost: null,
      editing: false
    };
  }
  
  handleClick = () => {
    if (this.state.selectedPost != null){
      this.setState({
        selectedPost: null,
        // editing: false
      });
    } else {
      const {dispatch} = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch (action);
    }
  };

  handleAddingNewPostToList = (newPost) => {
    const {dispatch} = this.props;
    const { id, name, content, timestamp, score } = newPost;
    const action = {
      type: 'ADD_POST',
      name: name,
      content: content,
      score: score,
      timestamp: timestamp,
      id: id,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM',
    }
    dispatch(action2);
  }

  handleUpvotePost = (postId) => {
    const {dispatch} = this.props;
    const upvotePost = this.props.mainPostList[postId];
    const { name, content, timestamp, score, id } = upvotePost;
    const newScore = score + 1;
    const action = {
      type: 'ADD_POST',
      name: name,
      content: content,
      score: newScore,
      timestamp: timestamp,
      id: id
    }
    console.log(action);
    dispatch(action)
  }

  handleDownvotePost = (postId) => {
    const {dispatch} = this.props;
    const upvotePost = this.props.mainPostList[postId];
    const { name, content, timestamp, score, id } = upvotePost;
    const newScore = score - 1;
    const action = {
      type: 'ADD_POST',
      name: name,
      content: content,
      score: newScore,
      timestamp: timestamp,
      id: id
    }
    dispatch(action)
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }


  render() {

    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post = {this.state.selectedPost} />; 
      buttonText = "Return to List";
    } else if (this.props.formVisibleOnPage){
      currentlyVisibleState = <PostAdd onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Return to Home"
    } else {
      currentlyVisibleState = < PostList postList = {this.props.mainPostList} sortOrder ={this.props.sortOrder} onPostSelection={this.handleChangingSelectedPost} onUpvote={this.handleUpvotePost} onDownvote={this.handleDownvotePost}/>;
      buttonText = "Add Post(go to post form)";
    }

    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick ={this.handleClick}>{buttonText}</button>
        <br/>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  const sortOrder = Object
  .keys(state.mainPostList).sort((a, b) => state.mainPostList[b].score - state.mainPostList[a].score)

  return {
    sortOrder: sortOrder,
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  } 
}

PostControl = connect(mapStateToProps)(PostControl);
export default PostControl;
