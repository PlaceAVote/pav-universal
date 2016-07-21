import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React from 'react';
import EmailInput from '../../../src/containers/inputs/EmailInput.jsx';

describe('EmailInput:Containers', () => {
  it('should have a type of email', () => {
    const wrapper = shallow(<EmailInput />);
    expect(wrapper.find('Input').render().html()).contains('type="email"');
  });

  it('should have label of Email', () => {
    const wrapper = shallow(<EmailInput />);
    expect(wrapper.find('Input').render().text()).contains('Email Address');
  });

  it('should have placeholder of someone@someone.com', () => {
    const wrapper = shallow(<EmailInput />);
    expect(wrapper.find('Input').render().html()).contains('placeholder="someone@someone.com"');
  });

  it('given an empty vale the error message will be populated on blur', () => {
    const wrapper = mount(<EmailInput />);
    const input = wrapper.childAt(1);
    input.simulate('blur', input);
    expect(wrapper.html()).to.contain('Please enter a valid Email Address');
  });

  it('given an invalid email address set an error message', () => {
    const wrapper = mount(<EmailInput />);
    const input = wrapper.childAt(1);
    input.node.value = 'goble';
    input.simulate('change', input);
    input.simulate('blur', input);
    expect(wrapper.html()).to.contain('Please enter a valid Email Address');
  });

  it('given a valid email address do not set an error message', () => {
    const wrapper = mount(<EmailInput />);
    const input = wrapper.childAt(1);
    input.node.value = 'test@test.com';
    input.simulate('change', input);
    input.simulate('blur', input);
    expect(wrapper.html()).to.not.contain('Please enter a valid Email Address');
  });
});
