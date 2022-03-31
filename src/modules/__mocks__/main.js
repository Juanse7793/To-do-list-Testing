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

    editText = (index, content) => {
      // this.array[index].description = content;
      this.lStorage();
      return `the description of the object in the index ${index} has edited with ${content}`;
    }

    checked = (index) => {
      // this.array[index].checkbox = bool;
      this.lStorage();
      return `the task at index ${index} has been ccompleted`;
    }

    clean = () => {
      // this.array = this.array.filter((todo) => todo.checkbox === false);
      // this.organizeIndex();
      this.lStorage();
      return 'the completed tasks have been removed';
    }
}

const array = new ArrayOfTodos();

module.exports = array;