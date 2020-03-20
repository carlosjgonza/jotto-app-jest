import axios from 'axios';

import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  RESET_GAME: 'RESET_GAME',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
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
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

/**
 * Returns Redux thunk function that dispatches SET_SECRET_WORD action
 * @function getSecretWord
 * @returns {function} - Redux Thunk function.
 */
export const getSecretWord = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3030').then((response) => {
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data,
      });
    });
  }
};

export const resetGame = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.RESET_GAME,
    });
  };
};