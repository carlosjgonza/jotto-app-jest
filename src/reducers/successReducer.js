import { actionTypes } from "../actions";

/**
 * @function SuccessReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - Action to be reduced
 * @returns {boolean} - New Success State
 */
export default (state=false, action) => {
  switch(action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    case actionTypes.RESET_GAME:
      return false;
    default: return state;
  }
}