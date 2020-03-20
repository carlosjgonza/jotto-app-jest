import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../test/testUtils';
import { resetGame } from './actions';
import Congrats, { UnconnectedCongrats } from './Congrats';

const defaultProps = {
  guessedWords: [],
  resetGame: () => {},
  secretWord: '',
  success: false,
};

/**
 * Setup is a factory function to create a shallowWrapper for Congrats.
 * @function
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Congrats store={store} />).dive().dive();
  return wrapper;
}

test('Renders without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('Renders no text when `success` prop is false', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('Renders non-empty congrats message when `success` prop is true', () => {
  const props = { ...defaultProps, success: true };
  const wrapper = shallow(<UnconnectedCongrats {...props} />);
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(1);
});
test('Does not warning with expected props', () => {
  const expectedProps = {
    guessedWords: [],
    resetGame: () => {},
    secretWord: '',
    success: true,
  };
  checkProps(UnconnectedCongrats, expectedProps);
});
test('Render `New Word` button when `success` prop is true', () => {
  const props = { ...defaultProps, success: true };
  const wrapper = shallow(<UnconnectedCongrats {...props} />);
  const newWordButton = findByTestAttr(wrapper, 'congrats-button');
  expect(newWordButton.length).toBe(1);
});
test('`ResetGame` action is a function on the props', () => {
  const wrapper = setup();
  const resetGameProp = wrapper.instance().props.resetGame;
  expect(resetGameProp).toBeInstanceOf(Function);
});
describe('Events', () => {
  let store;
  let wrapper;
  let resetGameMock;
  const initialState = {
    guessedWords: [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "agile", letterMatchCount: 1 },
      { guessedWord: "party", letterMatchCount: 5 },
    ],
    secretWord: '',
    success: true,
  };
  beforeEach(() => {
    // Setting up mock for `guessWord`
    resetGameMock = jest.fn();
    const props = {
      resetGame: resetGameMock,
      ...initialState,
    };

    store = storeFactory(initialState);
    wrapper = shallow(<UnconnectedCongrats {...props} />);
  });
  test('`New word` is executed when button is clicked', () => {
    // Get button and execute click
    const button = findByTestAttr(wrapper, 'congrats-button');
    button.simulate('click');

    // Check times called mock method
    const resetGameCallCount = resetGameMock.mock.calls.length;
    expect(resetGameCallCount).toBe(1);
  });
  test('`reset game` update state to initial values', () => {
    // Dispatch reset game
    store.dispatch(resetGame());
    const newState = store.getState();
    const expectedState = {
      guessedWords: [],
      secretWord: '',
      success: false,
    };
    expect(newState).toEqual(expectedState);
  });
});
