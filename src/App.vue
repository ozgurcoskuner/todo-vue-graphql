<template>
  <div id='app'>
    <Header />
    <AddTask />
    <Tasks />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import AddTask from './components/AddTask/AddTask.vue';
import Header from './components/Header/Header.vue';
import Tasks from './components/Tasks/Tasks.vue';

@Component({
  components: {
    AddTask,
    Header,
    Tasks,
  },
  apollo: {},
})
export default class App extends Vue {}
</script>

<style lang='scss'>
#app {
  background: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  margin: auto;
  width: 400px;
  border: 1px solid black;
}
</style>
