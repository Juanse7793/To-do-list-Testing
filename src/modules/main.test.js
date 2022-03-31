jest.mock('./main.js');
jest.mock('./events.js');
const main = require('./main.js');
const events = require('./events.js');

describe('LocalStorage', () => {
  test('localStorage', () => {
    expect(main.lStorage()).toBe('object stored in LocalStorage');
  });
});

describe('Adding tasks', () => {
  test('Adding an "li" element with the following data', () => {
    expect(main.addTodos(false, 'test', 1)).toEqual({ checkbox: false, description: 'test', index: 1 });
  });
  test('Adding an "li" element with the following data 2', () => {
    expect(main.addTodos(false, 'test 2', 2)).toEqual({ checkbox: false, description: 'test 2', index: 2 });
  });
});

describe('Removing tasks', () => {
  test('Removing an "li" element with the following data', () => {
    expect(main.removeTodos(false, 'test', 2)).toBe(2);
  });
  test('Removing an "li" element with the following data 2', () => {
    expect(main.removeTodos(false, 'test', 1)).toBe(1);
  });
});

describe('Edit description', () => {
  test('Edit an object description based on its index', () => {
    expect(main.editText(1, 'test')).toStrictEqual('the description of the object in the index 1 has edited with test');
  });
  test('Edit an object description based on its index 2', () => {
    expect(main.editText(2, 'test 2')).toStrictEqual('the description of the object in the index 2 has edited with test 2');
  });
});

describe('Completed task', () => {
  test('Store the completed task to localstorag and update the bool value', () => {
    expect(main.checked(1)).toStrictEqual('the task at index 1 has been ccompleted');
  });
  test('Store the completed task to localstorage and update the bool value', () => {
    expect(main.checked(2)).toStrictEqual('the task at index 2 has been ccompleted');
  });
});

describe('Clean all', () => {
  test('Clean all completed tasks', () => {
    expect(main.clean()).toStrictEqual('the completed tasks have been removed');
  });
});

describe('Events', () => {
  test('Press enter to add a new task', () => {
    expect(events.keypress()).toBe('the <li> is added');
  });
  test('Click to remove a task', () => {
    expect(events.click()).toBe('the <li> is removed');
  });
  test('Edit the description of a task', () => {
    expect(events.input()).toBe('the description of the task is editing');
  });
  test('Change the checkbox value', () => {
    expect(events.change()).toBe('the checkbox bool value has changed');
  });
  test('Click to clean all completed tasks', () => {
    expect(events.cleanClick()).toBe('the completed tasks have been removed');
  });
});
