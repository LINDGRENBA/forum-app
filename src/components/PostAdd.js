import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function PostAdd(){

  // method to handle form submission

  return (
    <React.Fragment>
      <ReusableForm 
      buttonText="Post"
      />
    </React.Fragment>
  );
}

// PostAdd.propTypes = {

// }

export default PostAdd;
