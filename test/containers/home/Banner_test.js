import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import HomeBanner from '../../../src/containers/home/Banner.jsx';

describe('HomeBanner:Containers:Home', () => {
  it('should be populated with correct text', () => {
    const wrapper = shallow(<HomeBanner />);
    expect(wrapper.html()).to.contain('Be Loud, Be Heard, Be Represented');
  });
});

