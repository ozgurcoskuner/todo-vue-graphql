<template src='./Task.html'></template>
<style scoped src='./Task.css'></style>
<script lang='ts'>

interface TaskInterface {
    id: number;
    description: string;
    isDone: boolean;
}

import CHECK_TASK from '@/graphql/CheckTask';
import DELETE_TASK from '@/graphql/DeleteTask';
import UNCHECK_TASK from '@/graphql/UncheckTask';
import UPDATE_TASK from '@/graphql/UpdateTask';
import {Component, Prop, Vue} from 'vue-property-decorator';
@Component({
    apollo: {},
})
export default class Task extends Vue {
    @Prop() protected todo!: TaskInterface;
  protected deleteTask() {
      const confirmDelete = confirm('Are you sure to delete this item?');
      if (confirmDelete) {
          this.$apollo.mutate({
              mutation: DELETE_TASK,
              variables: {
                  id: this.todo.id,
              },
              refetchQueries: ['todos'],
          });
      }
  }

  protected checkTask() {
      this.$apollo.mutate({
          mutation: CHECK_TASK,
          variables: {
              id: this.todo.id,
          },
          refetchQueries: ['todos'],
      });
  }
  protected uncheckTask() {
      this.$apollo.mutate({
          mutation: UNCHECK_TASK,
          variables: {
              id: this.todo.id,
          },
          refetchQueries: ['todos'],
      });
  }

  protected updateTask() {
      const updatedDesc = prompt('Make changes to your task', this.todo.description);
      this.$apollo.mutate({
          mutation: UPDATE_TASK,
          variables: {
              id: this.todo.id,
              description: updatedDesc,
          },
          refetchQueries: ['todos'],
      });
  }

}
</script>
