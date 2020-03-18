import React from 'react';
import { shallow } from 'enzyme';

/**
 * Setup is a factory function to create a shallowWrapper for the component passed as parameter
 * @function
 * @param {JSX.Element} Component - Component to generate ShallowWrapper.
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
export const setup = (Component, props={}) => {
  return shallow(<Component {...props} />);
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