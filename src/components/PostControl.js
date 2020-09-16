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
  
  handleClick = () => {
    // if (this.state.selectedPost != null){
    //   this.setState({
    //     // selectedPost: null,
    //     // editing: false
    //   });
    // } else {
      const {dispatch} = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch (action);
    // }
  }

  handleAddingNewPostToList = (newPost) => {
    const {dispatch} = this.props;
    const { id, name, content, timestamp } = newPost;
    const action = {
      type: 'ADD_POST',
      name: name,
      content: content,
      timestamp: timestamp,
      id: id,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM',
    }
    dispatch(action2);
  }


  render() {

    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.formVisibleOnPage){
      currentlyVisibleState = <PostAdd onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Return to Home"
    } else {
      currentlyVisibleState = < PostList postList = {this.state.mainPostList}  sort ={this.props.sortOrder} />;
      buttonText = "Return to List"
    }

    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick ={this.handleClick}>{buttonText}</button>
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

// data = {
// 1: {name: 'Steve',
// content: 'Cat meme',
// timestamp: Date.now(),
// score: 10
// },
// 2: {name: 'Jessica',
// content: 'Cat picture',
// timestamp: Date.now(),
// score: 19
// },
// 3: {name: 'John',
// content: 'Cat video',
// timestamp: Date.now(),
// score: 25
// }
// }