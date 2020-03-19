import { actionTypes } from '../actions/index';
import successReducer from './successReducer';

test('Returns default initial state of `false` when no action is dispatched', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test('Returns state `true` upon receiving an action of type `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});