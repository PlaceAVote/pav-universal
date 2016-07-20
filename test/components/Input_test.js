import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Input from '../../src/components/Input.jsx';

describe('Input', () => {
  it('should take in a label', () => {
    const wrapper = shallow(<Input label='test'/>);
    expect(wrapper.find('label').first().text()).to.eql('test');
  });

  it('should take in a placeholder', () => {
    const wrapper = shallow(<Input placeholder='test'/>);
    expect(wrapper.find('input').first().props().placeholder).to.eql('test');
  });

  it('should take an error property', () => {
    const error = { message: 'failed' };
    const wrapper = shallow(<Input error={ error }/>);
    expect(wrapper.find('div').first().html()).to.contain('failed');
  });

  it('should type a type propety', () => {
    const wrapper = shallow(<Input type='test'/>);
    expect(wrapper.find('input').first().props().type).to.eql('test');
  });

  it('should take a validation action for onBlur', () => {
    let called = false;
    const blured = () => {
      called = true;
    };
    const wrapper = mount(<Input validate={ blured }/>);
    wrapper.find('input').first().simulate('blur');
    expect(called).to.eql(true);
  });
});
