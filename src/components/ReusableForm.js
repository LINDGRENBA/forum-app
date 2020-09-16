import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(){
  const buttonText = "Post";
  return (
    <React.Fragment>
      <input
        type='text'
        name='name'
        placeholder='Name' />
      <br/>
      <textarea
        name='content'
        placeholder='Tell us what&apos;s up'
        />
      <br/>
      <button type='submit'>{buttonText}</button>
    </React.Fragment>
  );
}

// ReusableForm.propTypes = {

// };

export default ReusableForm;