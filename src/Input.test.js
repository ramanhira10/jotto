import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input';

const TEST_IDENTIFIER = {
  COMPONENT_INPUT: 'component-input',
  INPUT_BOX: 'input-box',
  SUBMIT_BUTTON: 'submit-button'
};

const setup = (success = false, secretWord = 'party') => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe('render', () => {
  describe('success is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(true);
    });

    test('renders without errors', () => {
      const component = findByTestAttr(
        wrapper,
        TEST_IDENTIFIER.COMPONENT_INPUT
      );
      expect(component.length).toBe(1);
    });

    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, TEST_IDENTIFIER.INPUT_BOX);
      expect(inputBox.exists()).toBe(false);
    });

    test('submit button does not show', () => {
      const submitButton = findByTestAttr(
        wrapper,
        TEST_IDENTIFIER.SUBMIT_BUTTON
      );
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe('success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(false);
    });

    test('renders without errors', () => {
      const component = findByTestAttr(
        wrapper,
        TEST_IDENTIFIER.COMPONENT_INPUT
      );
      expect(component.length).toBe(1);
    });

    test('input box shows', () => {
      const inputBox = findByTestAttr(wrapper, TEST_IDENTIFIER.INPUT_BOX);
      expect(inputBox.exists()).toBe(true);
    });

    test('submit button shows', () => {
      const submitButton = findByTestAttr(
        wrapper,
        TEST_IDENTIFIER.SUBMIT_BUTTON
      );
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test('should not throw warning with expected props', () => {
  checkProps(Input, { success: false, secretWord: '' });
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, TEST_IDENTIFIER.INPUT_BOX);
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button is clicked', () => {
    const submitButton = findByTestAttr(wrapper, TEST_IDENTIFIER.SUBMIT_BUTTON);

    submitButton.simulate('click', { preventDefault: () => {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
