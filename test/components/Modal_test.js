import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../src/components/Modal.jsx';

describe('Modal:Containers', () => {
  describe('Modal', () => {
    it('can contain children', () => {
      const wrapper = shallow(<Modal><div className='ImAChild'></div></Modal>);
      expect(wrapper.html()).to.contain('class="ImAChild"');
    });
  });
});
