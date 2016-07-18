import { expect } from 'chai';
import reducers from '../../src/reducers/index.js';

describe('Index:Reducers', () => {
  it('has default initial state', () => {
    const subject = reducers();
    expect(subject).to.eql({});
  });
});
