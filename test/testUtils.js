/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';

/**
 * Create a testing store with imported reducers, middleware and initial state.
 * globals : rootReducer, middlewares
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns { Store } - Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute to search. 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

/**
 * Method to check props (using check-prop-types module) passed the component and expected props
 * @param {JSX.Element} component - Component to test 
 * @param {Object} expectedProps - Props passed to component to validate if they are expected
 */
export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}
