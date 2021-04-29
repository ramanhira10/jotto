//recieve the success state as a prop
import React from 'react';
import propTypes from 'prop-types';
/**
 * Functional react component for congratulatory message.
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false)
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test='component-congrats'></div>;
  }
};

Congrats.propTypes = {
  success: propTypes.bool.isRequired
};

export default Congrats;
