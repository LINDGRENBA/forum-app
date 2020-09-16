import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function PostAdd(props){

  // method to handle form submission
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({name:event.target.name.value, content:event.target.content.value, score: 0, timestamp: Date.now(), id:v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewPostFormSubmission}
      buttonText="Post"
      />
    </React.Fragment>
  );
}

  PostAdd.propTypes = {
    onNewPostCreation: PropTypes.func
  };

export default PostAdd;
