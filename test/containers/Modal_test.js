import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { Modal, mapPropsToState } from '../../src/containers/Modal.jsx';

describe('Modal:Containers', () => {
  describe('mapPropsToState', () => {
    it('should return modal property of state object', () => {
      const modal = {
        visible: false,
      };
      const state = {
        modal,
      };
      const subject = mapPropsToState(state);
      expect(subject.modal).to.eql(modal);
    });

    it('shouldnt break if state isnt defined', () => {
      const subject = mapPropsToState(undefined);
      expect(subject.modal).to.eql(undefined);
    });
  });

  describe('Modal', () => {
    it('should return null when visible is false', () => {
      const modal = {
        visible: false,
      };
      const wrapper = shallow(<Modal modal={ modal } />);
      expect(wrapper.node).to.eql(null);
    });
  });
});
