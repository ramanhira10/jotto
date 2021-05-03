import React from 'react';

import propTypes from 'prop-types';

const Input = ({ secretWord = '' }) => {
  return <div data-test='component-input' />;
};

Input.propTypes = {
  secretWord: propTypes.string.isRequired
};

export default Input;
