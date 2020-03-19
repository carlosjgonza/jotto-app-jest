import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Setup is a factory function to create a shallowWrapper for Input
 * @function
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />).dive().dive();
}

setup();

describe('Render', () => {
  describe('Word has not been guessed', () => {
    test('Render component without error', () => {});
    test('Render input box', () => {});
    test('Render submit button', () => {});
  });
  describe('Word has been guessed', () => {
    test('Render component without error', () => {});
    test('Does not render input box', () => {});
    test('Does not render submit button', () => {});
  });
});
describe('Update State', () => {

});
