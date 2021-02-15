import Todos from "./todos";
import Todo from "./todo";
import { reactive } from "vue";

const todos = new Todos();
// Instantiate todos
const todo1 = new Todo({ title: "Buy Milk" });
const todo2 = new Todo({ title: "Read A Book", isDone: true });
const todo3 = new Todo({ title: "Kill the Dark Lord" });

// Adding todos to a list
todos.addTodo(todo1);
todos.addTodo(todo2);
todos.addTodo(todo3);

export default reactive(todos);
