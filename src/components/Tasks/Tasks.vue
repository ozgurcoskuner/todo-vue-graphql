<template src='./Tasks.html'></template>
<style scoped src='./Tasks.css'></style>
<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';
import Task from '../Task/Task.vue';
import TASKS from '@/graphql/Tasks';

interface TasksType {
  id: number;
  description: string;
  isDone: boolean;
}
@Component({
    components: {
        Task,
    },
    apollo: {
        todos: {
            query: TASKS,
            // update: data => data.tasks
        },
    },
})

export default class Tasks extends Vue {

public todos: TasksType[] = [];

}

</script>

