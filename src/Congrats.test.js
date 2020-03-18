import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { setup, findByAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Renders without errors', () => {
  const wrapper = setup(Congrats);
});
test('Renders no text when `success` prop is false', () => {
});
test('Renders non-empty congrats message when `success` prop is true', () => {
});