import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { HomeHero } from '../../../src/containers/home/Hero.jsx';

describe('HeroBanner:Containers:Home', () => {
  it('should be populated with correct text', () => {
    const wrapper = shallow(<HomeHero />);
    expect(wrapper.html()).to.contain('Be Loud, Be Heard, Be Represented');
    expect(wrapper.find('Button')).to.have.length(2);
  });

  it('should change page to signup when signup button is pressed', () => {
    let calledBrowser;
    const mockHistory = {
      push: () => {
        calledBrowser = true;
      },
    };
    const wrapper = mount(<HomeHero history={ mockHistory }/>);
    const registerButton = wrapper.find('Button').first();
    registerButton.simulate('click', registerButton);
    expect(calledBrowser).to.eql(true);
  });

  it('should change page when it signin is pressed');
});

