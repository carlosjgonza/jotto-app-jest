import React from 'react';
import { shallow } from 'enzyme';

import NumberGuess from './NumberGuess';
import { findByTestAttr } from '../test/testUtils';

/**
 * Setup is a factory function to create a shallowWrapper for NumberGuess
 * @function
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<NumberGuess {...props} />);
}

describe('Render', () => {
  test('component is rendered as expected', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-number-guess');
    expect(component.length).toBe(1);
  });
  test('label is rendered as expected', () => {
    const wrapper = setup();
    const label = findByTestAttr(wrapper, 'label-number-guess');
    expect(label.length).toBe(1);
  });
  test('label display number of guess passed by props', () => {
    const countWords = 3;
    const wrapper = setup({ countWords });
    const label = findByTestAttr(wrapper, 'label-number-guess');
    expect(label.text()).toBe(`Total Guesses: ${countWords}`);
  });
});