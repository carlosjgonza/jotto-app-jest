export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

// /**
//  * @function correctGuess
//  * @returns {object} - Action object with type 'CORRECT_GUESS'
//  */
// export const correctGuess = () => {
//   return { type: actionTypes.CORRECT_GUESS };
// }

/**
 * Returns Redux thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action
 * @function guessedWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessedWord = (guessedWord) => {
  return (dispatch, getState) => {

  };
};