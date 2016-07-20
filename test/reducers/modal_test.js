import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import modal from '../../src/reducers/modal.js';
import { showModal, hideModal } from '../../src/actions/modal.js';

describe('Modal:Reducers', () => {
  describe('Default', () => {
    it('should not return undefined', () => {
      const changedState = modal();
      expect(changedState).to.eql({});
    });
  });

  describe('Show', () => {
    it('should return new modal state from show action when no previous state is given', () => {
      const state = {};
      deepFreeze(state);
      const changedState = modal(state, showModal('test'));
      expect(changedState).to.eql({
        visible: true,
        modal: 'test',
      });
    });

    it('should return new modal state from show action when previous state is given', () => {
      const state = {
        visible: false,
        modal: 'cat',
      };
      deepFreeze(state);
      const changedState = modal(state, showModal('test'));
      expect(changedState).to.eql({
        visible: true,
        modal: 'test',
      });
    });
  });

  describe('Hide', () => {
    it('should return new modal state from hide action when no previous state is given', () => {
      const state = {};
      deepFreeze(state);
      const changedState = modal(state, hideModal());
      expect(changedState).to.eql({
        visible: false,
      });
    });

    it('should return new modal state from hide action when previous state is given', () => {
      const state = {
        visible: true,
        modal: 'cat',
      };
      deepFreeze(state);
      const changedState = modal(state, hideModal());
      expect(changedState).to.eql({
        visible: false,
      });
    });
  });
});
