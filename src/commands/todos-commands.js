import Todo from "@/store/todo";

export function addTodo(store, { title, isDone }) {
  const todo = new Todo({ title, isDone });
  store.addTodo(todo);
}

export function removeTodo(store, todo) {
  store.removeTodo(todo);
}
