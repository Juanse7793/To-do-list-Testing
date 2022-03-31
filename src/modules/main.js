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
    this.array[index].description = content;
    this.lStorage();
    return `The object in the index ${index} has edited with ${content}`
  }

  checked = (index, bool) => {
    this.array[index].checkbox = bool;
    this.lStorage();
  }

  clean = () => {
    this.array = this.array.filter((todo) => todo.checkbox === false);
    this.organizeIndex();
    this.lStorage();
  }
}

const array = new ArrayOfTodos();

module.exports = array;