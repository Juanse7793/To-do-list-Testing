const todos = require('./ArrayOfTodos.js');

const objectContainer = document.getElementById('object');
const list = document.createElement('section');
const check = document.createElement('input');
const object = {};

const click = (menu) => {
  menu.addEventListener('click', () => {
    objectContainer.removeChild(list);
    return todos.removeTodos(object.checkbox, object.description, object.index);
  });
};

const keyDown = (task) => {
  task.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });
};

const input = (task, index) => {
  task.addEventListener('input', () => {
    todos.editText(index, task.innerHTML);
  });
};

const mark = () => {
  if (object.checkbox) {
    check.checked = true;
  }
};

const change = (check, index) => {
  check.addEventListener('change', (e) => {
    if (e.target.checked) {
      todos.checked(index, true);
    } else {
      todos.checked(index, false);
    }
  });
};

module.exports = {
  click, keyDown, input, mark, change,
};
