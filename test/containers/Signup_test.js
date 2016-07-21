import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Signup from '../../src/containers/Signup.jsx';

describe('Signup:Containers', () => {
  it('returns a modal wrapper with a modal and div elements', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('Modal')).to.have.length(1);
  });
});
