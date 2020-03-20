import { actionTypes } from '../actions';

/**
 * @function SecretWordReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - Action to be reduced
 * @returns {boolean} - New Success State
 */
export default (state=null, action) => {
  switch(action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    case actionTypes.RESET_GAME:
      return null;
    default: return state;
  }
}