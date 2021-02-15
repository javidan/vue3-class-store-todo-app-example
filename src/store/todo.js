export default class Todo {
  constructor({ title, isDone = false }) {
    this.title = title;
    this.isDone = isDone;
  }

  toggleDone() {
    this.isDone = !this.isDone;
  }

  toJson() {
    return {
      title: this.title,
      isDone: this.isDone,
    };
  }
}
