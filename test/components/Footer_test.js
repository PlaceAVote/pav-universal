import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FooterComponent from '../../src/components/Footer.jsx';

describe('Footer:Components', () => {
  const links = [{url: '/faqs', label: 'FAQs'}, {url: '/team', label: 'Team'}];
  it('should contain logo image', () => {
    const wrapper = shallow(<FooterComponent links={ links } />);
    expect(wrapper.find('img')).to.have.length(1);
    expect(wrapper.find('img').node.props.src).to.contain('images/logo/mark_full_color.svg');
  });
});
