<template>
  <h1>Todos</h1>
  <Todos :todos="store"/>
</template>

<script>
import Todos from './components/Todos'
import store from './store/store'

export default {
  name: 'App',
  components: {
    Todos
  },

  setup(){
    return {
      store
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
