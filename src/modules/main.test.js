jest.mock('./main.js');
jest.mock('./events.js');
const main = require('./main.js');
const events = require('./events.js');

describe('localStorage', () => {
  test('localStorage', () => {
    expect(main.lStorage()).toStrictEqual('object stored in LocalStorage');
  });
});

describe('add things', () => {
  test('adding an "li" element with the following data', () => {
    expect(main.addTodos(false, 'test', 1)).toStrictEqual({ checkbox: false, description: 'test', index: 1 });
  });
  test('adding an "li" element with the following data2', () => {
    expect(main.addTodos(false, 'test 2', 2)).toStrictEqual({ checkbox: false, description: 'test 2', index: 2 });
  });
});

describe('remove things', () => {
  test('removing an "li" element with the following data', () => {
    expect(main.removeTodos(false, 'test', 2)).toBe(2);
  });
  test('removing an "li" element with the following data', () => {
    expect(main.removeTodos(false, 'test', 1)).toBe(1);
  });
});

describe('Events', () => {
  test('press enter to add a new task', () => {
    expect(events.keypress()).toBe('the <li> is added');
  });
  test('click to remove a task', () => {
    expect(events.click()).toBe('the <li> is removed');
  });
});

describe('Edit things', () => {
  test('Select the object and edit', () => {
    expect(main.editText(1, 'edit text')).toStrictEqual('The object in the index 1 has edited with edit text');
  });
});
  