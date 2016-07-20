import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ButtonComponent from '../../src/components/Button.jsx';

describe('Button:Components', () => {
  it('should return a single button in its html', () => {
    const wrapper = shallow(<ButtonComponent />);
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('button should always contain c-button in class name', () => {
    const wrapper = shallow(<ButtonComponent />);
    expect(wrapper.find('button').node.props.className).to.contain('c-button');
  });
  it('should assign the blue class modifiers given the type property is blue', () => {
    const wrapper = shallow(<ButtonComponent type='blue' />);
    expect(wrapper.find('button').node.props.className).to.contain('c-button--blue');
  });
  it('should assign the blue class modifiers given the type property is green', () => {
    const wrapper = shallow(<ButtonComponent type='green' />);
    expect(wrapper.find('button').node.props.className).to.contain('c-button--green');
  });
  it('should assign the onClick function to the passed in function', () => {
    const click = () => {};
    const wrapper = shallow(<ButtonComponent action={ click } />);
    expect(wrapper.find('button').node.props.onClick).to.eql(click);
  });
  it('should assign the buttons text as the to the passed in text property', () => {
    const wrapper = shallow(<ButtonComponent text='Test' />);
    expect(wrapper.find('button').text()).to.eql('Test');
  });
});
