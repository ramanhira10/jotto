import React from 'react';

import propTypes from 'prop-types';

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  if (success) {
    return <div data-test='component-input' />;
  }

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
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          onClick={evt => {
            evt.preventDefault();
            //TODO: update guessWords global state
            //TODO: check against secretWord and optionally update success global state
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  success: propTypes.bool,
  secretWord: propTypes.string.isRequired
};

export default Input;
