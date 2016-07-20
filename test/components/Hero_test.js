import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HeroComponent from '../../src/components/Hero.jsx';

describe('Hero:Components', () => {
  it('should set div background to the image in props', () => {
    const wrapper = shallow(<HeroComponent img='test/route.png' />);
    expect(wrapper.find('.c-hero')).to.have.length(1);
    expect(wrapper.find('div').node.props.style.backgroundImage).to.eql('url(test/route.png)');
  });
  it('should set title in props to title', () => {
    const wrapper = shallow(<HeroComponent title='PlaceAVote' />);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h1').text()).to.eql('PlaceAVote');
  });
  it('should set subtitle in props to subtitle', () => {
    const wrapper = shallow(<HeroComponent subtitle='Be Loud' />);
    expect(wrapper.find('h4')).to.have.length(1);
    expect(wrapper.find('h4').text()).to.eql('Be Loud');
  });
});
