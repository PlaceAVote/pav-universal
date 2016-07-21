import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Home from '../../src/containers/Home.jsx';

describe('Home:Containers', () => {
  it('contains a div and the other containers/components that make home', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.first().node.props.children.type.displayName).to.contains('HomeHero');
  });
});
