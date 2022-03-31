// extracted from the ArrayOfTodos.js file:
class ArrayOfTodos {
  constructor() {
    this.array = [];
  }

  lStorage = () => {
    const convertToLocalStorage = JSON.stringify(this.array);
    localStorage.setItem('todo', convertToLocalStorage);
  }

  addTodos = (checkbox, description, index) => {
    const newTodo = {
      checkbox,
      description,
      index,
    };
    this.lStorage();
    this.array.push(newTodo);
    return newTodo;
  }

  removeTodos = (checkbox, description, index) => {
    this.array = this.array.filter((todo) => todo.checkbox !== checkbox
    || todo.description !== description || todo.index !== index);
    this.organizeIndex();
    this.lStorage();
    return index;
  }

  editText = (index, content) => {
    const newEdit = {
      index,
      content,
    };

    this.array[index].description = content;
    this.lStorage();
    return newEdit;
  }
}

const array = new ArrayOfTodos();

module.exports = array;