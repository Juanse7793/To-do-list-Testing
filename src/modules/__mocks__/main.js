class ArrayOfTodos {
  constructor() {
    this.array = [];
  }

    lStorage = () => 'object stored in LocalStorage';

    addTodos = (checkbox, description, index) => {
      const newTodo = {
        checkbox,
        description,
        index,
      };
      this.array.push(newTodo);
      this.lStorage();
      return newTodo;
    }

    removeTodos = (checkbox, description, index) => {
      this.array = this.array.filter((todo) => todo.checkbox !== checkbox
      || todo.description !== description || todo.index !== index);
      // this.organizeIndex();
      this.lStorage();
      return index;
    }
}

const array = new ArrayOfTodos();

module.exports = array;