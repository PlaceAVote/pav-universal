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

  it('should dispatch an action when Register Button is Click to show Register Modal', () => {
    let calledAction;
    const mockDispatch = (action) => {
      calledAction = action;
    };
    const wrapper = mount(<HomeHero dispatch={ mockDispatch }/>);
    const registerButton = wrapper.find('Button').first();
    registerButton.simulate('click', registerButton);
    expect(calledAction).to.not.eql(undefined);
    expect(calledAction.type).to.eql('SHOW_MODAL');
    expect(calledAction.visible).to.eql(true);
    expect(calledAction.modal).to.eql('register');
  });

  it('should dispatch an action when Sign In Button is Click to show Sign In Modal', () => {
    let calledAction;
    const mockDispatch = (action) => {
      calledAction = action;
    };
    const wrapper = mount(<HomeHero dispatch={ mockDispatch }/>);
    const signUpButton = wrapper.find('Button').at(1);
    signUpButton.simulate('click', signUpButton);
    expect(calledAction).to.not.eql(undefined);
    expect(calledAction.type).to.eql('SHOW_MODAL');
    expect(calledAction.visible).to.eql(true);
    expect(calledAction.modal).to.eql('signIn');
  });
});

