class ArrayOfTodos {
  constructor() {
    this.array = [];
  }

  // lStorage = () => {
  //   const convertToLocalStorage = JSON.stringify(this.array);
  //   localStorage.setItem('todo', convertToLocalStorage);
  // }

  addTodos = (checkbox, description, index) => {
    const newTodo = {
      checkbox,
      description,
      index,
    };

    this.array.push(newTodo);
    return newTodo;
    // this.lStorage();
  }

  removeTodos = (checkbox, description, index) => {
    this.array = this.array.filter((todo) => todo.checkbox !== checkbox
    || todo.description !== description || todo.index !== index);
    // this.organizeIndex();
    // this.lStorage();
    return index;
  }
}

const array = new ArrayOfTodos();

module.exports = array;