<template>
  <div :class="{ isDone: todo.isDone }" @click="toggleDone(todo)">
    <input :checked="todo.isDone" type="checkbox" > {{todo.title}}
  </div>
</template>

<script>
import { toggleDone } from '@/commands/todo-commands'
export default {
  name: 'Todo',
  setup(){
    return {
      toggleDone
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .isDone {
    text-decoration: line-through
  }
</style>
