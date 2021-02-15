export default class Todos {
  constructor() {
    this.items = [];
  }

  addTodo(todo) {
    this.items.push(todo);
  }

  removeTodo(todo) {
    const index = this.items.findIndex((item) => item === todo);
    this.items.splice(index, 1);
  }

  toJson() {
    return {
      todos: this.items.map((todo) => todo.toJson()),
    };
  }
}
