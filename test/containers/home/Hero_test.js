import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import HeroBanner from '../../../src/containers/home/Hero.jsx';

describe('HeroBanner:Containers:Home', () => {
  it('should be populated with correct text', () => {
    const wrapper = shallow(<HeroBanner />);
    expect(wrapper.html()).to.contain('Be Loud, Be Heard, Be Represented');
  });
});

