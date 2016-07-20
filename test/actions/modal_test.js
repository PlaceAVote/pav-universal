import { expect } from 'chai';
import { showModal, hideModal } from '../../src/actions/modal.js';

describe('Modal:Actions', () => {
  describe('Show', () => {
    it('should return an action with visible true', () => {
      const subject = showModal('test');
      const expected = {
        type: 'SHOW_MODAL',
        visible: true,
        modal: 'test',
      };
      expect(subject).to.eql(expected);
    });
  });
  describe('Hide', () => {
    it('should return an action with visible false', () => {
      const subject = hideModal();
      const expected = {
        type: 'HIDE_MODAL',
        visible: false,
      };
      expect(subject).to.eql(expected);
    });
  });
});
