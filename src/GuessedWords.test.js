import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

// guessedWords: Array of objects
// [
//   { guessedWord: "train", letterMatchCount: 3 },
//   { guessedWord: "agile", letterMatchCount: 1 },
// ],
// secretWord: string,
// success: boolean,

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Setup is a factory function to create a shallowWrapper for GuessedWords
 * @function
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
}

test('Renders without error', () => {
});
test('Does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});