import { expect } from 'chai';
import reducers from '../../src/reducers/index.js';

describe('Index:Reducers', () => {
  it('has default initial state', () => {
    const subject = reducers();
    expect(subject).to.not.eql(undefined);
    expect(subject.modal).to.not.eql(undefined);
    expect(subject.forms).to.not.eql(undefined);
  });
});
