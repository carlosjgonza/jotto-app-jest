import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Setup is a factory function to create a shallowWrapper for the component passed as parameter
 * @function
 * @param {JSX.Element} Component - Component to generate ShallowWrapper.
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (Component, props={}) => {
  return shallow(<Component {...props} />);
}

test('Renders without errors', () => {
  const wrapper = setup(Congrats);
});
test('Renders no text when `success` prop is false', () => {
});
test('Renders non-empty congrats message when `success` prop is true', () => {
});