import add from '../src/math/add';

describe('test add', () => {
  it('add 1 + 5', () => {
    expect(add(1, 5)).toBe(6);
  });
});
