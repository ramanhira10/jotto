import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/testUtils';

/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @function
 *
 * @param {object} state - Initial conditions.
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */

const setup = (state = {}) => {
  //TODO: apply state
  const wrapper = mount(<App />);

  //add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });

  //simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { perventDefault: () => {} });

  return wrapper;
};

describe.skip('no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: []
    });
  });

  test('creates GuessedWords table with one row', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe.skip('some words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
    });
  });

  test('some words guessed by some letter match', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(2);
  });
});

describe.skip('guessed secret word', () => {
  test('true to be true', () => {
    expect(true).toBe(true);
  });

  test('false to be false', () => {
    expect(false).toBe(false);
  });
});
