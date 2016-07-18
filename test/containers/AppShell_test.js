import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Shell from '../../src/containers/AppShell.jsx';

describe('AppShell:Containers', () => {
  it('returns the App Shell', () => {
    const wrapper = shallow(<Shell />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
