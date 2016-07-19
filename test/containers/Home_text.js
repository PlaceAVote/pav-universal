import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Home from '../../src/containers/Home.jsx';

describe('AppShell:Containers', () => {
  it('returns the App Shell', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('HomeBanner')).to.have.length(1);
  });
});
