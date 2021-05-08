import React from 'react';

import propTypes from 'prop-types';

const Input = ({ secretWord = '' }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');
  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          data-test='input-box'
          type='text'
          className='mb-2 mx-sm-3'
          placeholder='enter guess'
          value={currentGuess}
          onChange={evt => setCurrentGuess(evt.target.value)}
        />
        <button data-test='submit-button' className='btn btn-primary mb-2'>
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: propTypes.string.isRequired
};

export default Input;
