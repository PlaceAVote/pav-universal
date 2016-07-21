import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import forms from '../../src/reducers/forms.js';
import { inputEntered } from '../../src/actions/input.js';

describe('Form:Reducers', () => {
  describe('Default', () => {
    it('should not return undefined', () => {
      const state = forms();
      expect(state).to.not.eql(undefined);
    });
    it('should have intial signup state', () => {
      const state = forms();
      expect(state.signup).to.not.eql(undefined);
      expect(state.signup.meta).to.not.eql(undefined);
      expect(state.signup.meta.name).to.not.eql(undefined);
      expect(state.signup.firstName).to.not.eql(undefined);
      expect(state.signup.firstName.name).to.not.eql(undefined);
      expect(state.signup.lastName).to.not.eql(undefined);
      expect(state.signup.lastName.name).to.not.eql(undefined);
      expect(state.signup.password).to.not.eql(undefined);
      expect(state.signup.password.name).to.not.eql(undefined);
      expect(state.signup.confirmPassword).to.not.eql(undefined);
      expect(state.signup.confirmPassword.name).to.not.eql(undefined);
      expect(state.signup.dateOfBirth).to.not.eql(undefined);
      expect(state.signup.dateOfBirth.name).to.not.eql(undefined);
      expect(state.signup.gender).to.not.eql(undefined);
      expect(state.signup.gender.name).to.not.eql(undefined);
      expect(state.signup.zipCode).to.not.eql(undefined);
      expect(state.signup.zipCode.name).to.not.eql(undefined);
    });
  });
  describe('InputEntered', () => {
    it('returns the same state if form id is not recognised', () => {
      const state = {};
      const subject = forms(state, inputEntered({ formId: 'NA' }));
      expect(subject).to.eql(state);
    });

    it('returns the same state if input name is not recognised', () => {
      const state = {
        signup: { name: 'signup' },
      };
      const subject = forms(state, inputEntered({ formId: 'signup', fieldName: 'catName' }));
      expect(subject).to.eql(state);
    });

    it('sets the correct state of an input for a non required field', () => {
      const state = {
        signup: { meta: { name: 'signup' }, catName: {} },
      };
      deepFreeze(state);
      const subject = forms(state, inputEntered({ formId: 'signup', fieldName: 'catName', value: 'linda' }));
      expect(subject.signup.catName.value).to.eql('linda');
    });

    it('sets the correct error state of an input for required text field', () => {
      const state = {
        signup: { meta: { name: 'signup' }, catName: { required: true, type: 'text', error: {} } },
      };
      deepFreeze(state);
      const subject = forms(state, inputEntered({ formId: 'signup', fieldName: 'catName' }));
      expect(subject.signup.catName.error.message).to.not.eql(undefined);
    });

    it('sets the correct state of an input for required text field and text is given', () => {
      const state = {
        signup: { meta: { name: 'signup' }, catName: { required: true, type: 'text', error: {} } },
      };
      deepFreeze(state);
      const subject = forms(state, inputEntered({ formId: 'signup', fieldName: 'catName', value: 'toby' }));
      expect(subject.signup.catName.error.message).to.eql(undefined);
      expect(subject.signup.catName.value).to.eql('toby');
    });

    it('validates an email required field returning an error message if invalid', () => {
      const state = {
        signup: { meta: { name: 'signup' }, catName: { required: true, type: 'email', error: {} } },
      };
      deepFreeze(state);
      const subject = forms(state, inputEntered({ formId: 'signup', fieldName: 'catName', value: 'toby' }));
      expect(subject.signup.catName.error.message).to.eql('Email Address is not valid');
    });

    it('validates a zip required field returning an error message if invalid', () => {
      const state = {
        signup: { meta: { name: 'signup' }, catName: { required: true, type: 'zip', error: {} } },
      };
      deepFreeze(state);
      const subject = forms(state, inputEntered({ formId: 'signup', fieldName: 'catName', value: 'notAZip' }));
      expect(subject.signup.catName.error.message).to.eql('Zip Code is not valid');
    });

    it('validates a zip required field returning an error message if valid', () => {
      const state = {
        signup: { meta: { name: 'signup' }, catName: { required: true, type: 'zip', error: {} } },
      };
      deepFreeze(state);
      const subject = forms(state, inputEntered({ formId: 'signup', fieldName: 'catName', value: '90210' }));
      expect(subject.signup.catName.error.message).to.eql(undefined);
    });
  });
});
