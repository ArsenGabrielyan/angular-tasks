import { ValidationMsgPipe } from './validation-msg.pipe';

describe('ValidationMsgPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidationMsgPipe();
    expect(pipe).toBeTruthy();
  });
});
