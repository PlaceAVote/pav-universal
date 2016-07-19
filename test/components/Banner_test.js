import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BannerComponent from '../../src/components/Banner.jsx';

describe('Banner:Components', () => {
  it('should set div background to the image in props', () => {
    const wrapper = shallow(<BannerComponent img='test/route.png' />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('div').node.props.style.backgroundImage).to.eql('url(test/route.png)');
  });
  it('should set title in props to title', () => {
    const wrapper = shallow(<BannerComponent title='PlaceAVote' />);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h1').text()).to.eql('PlaceAVote');
  });
  it('should set subtitle in props to subtitle', () => {
    const wrapper = shallow(<BannerComponent subtitle='Be Loud' />);
    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.find('h2').text()).to.eql('Be Loud');
  });
});
