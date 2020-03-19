import { actionTypes } from '../actions';

/**
 * @function GuessedWordsReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - Action to be reduced
 * @returns {boolean} - New Success State
 */
export default (state=[], action) => {
  switch(action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}