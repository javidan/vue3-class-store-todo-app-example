<template>
  <div>
    <Todo :todo="todo" :key="index" v-for="(todo, index) in todos.items"/>
  </div>
  <button @click="onAddTodo">Add </button>
</template>

<script>
import Todo from './Todo'
import {addTodo} from '../commands/todos'
export default {
  name: 'Todos',
  setup(){
    return {
      Todo,
    }
  },
  methods:{
    onAddTodo(){
      const title = prompt("Todo Title")
      addTodo(this.todos, {title: title })
    }
  },
  props: {
    todos: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
