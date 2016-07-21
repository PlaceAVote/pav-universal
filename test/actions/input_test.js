import * as actions from '../../src/actions/constants.js';
import { expect } from 'chai';
import { inputEntered } from '../../src/actions/input.js';

describe('Inputs:Actions', () => {
  describe('InputEntered', () => {
    it('should return an action of INPUT_ENTERED', () => {
      const formId = 'registrationId';
      const fieldName = 'email_input';
      const value = 'test@placeavote.com';
      const input = { formId, fieldName, value, };
      const subject = inputEntered(input);
      expect(subject.type).to.eql(actions.inputEntered);
      expect(subject.formId).to.eql(formId);
      expect(subject.fieldName).to.eql(fieldName);
      expect(subject.value).to.eql(value);
    });
  });
});
