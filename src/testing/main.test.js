const array = require('../modules/main.js');

jest.mock('../main.js');

describe('add things', () => {
  test('adding an "li" element with the following data', () => {
    expect(array.addTodos(false, 'test', 1)).toStrictEqual({ checkbox: false, description: 'test', index: 1 });
  });
  test('localStorage', () => {
    expect(array.lStorage()).toStrictEqual('object stored in LocalStorage');
  });
  test('adding an "li" element with the following data2', () => {
    expect(array.addTodos(false, 'test 2', 2)).toStrictEqual({ checkbox: false, description: 'test 2', index: 2 });
  });
});

describe('remove things', () => {
  test('removing an "li" element with the following data', () => {
    expect(array.removeTodos(false, 'test', 2)).toBe(2);
  });
  test('removing an "li" element with the following data', () => {
    expect(array.removeTodos(false, 'test', 1)).toBe(1);
  });
});
