<template src="./AddTask.html"></template>
<style scoped src="./AddTask.css"></style>
<script lang='ts'>
import ADD_TASK from '@/graphql/AddTask';
import {Component, Vue} from 'vue-property-decorator';
@Component({apollo: {}})
export default class AddTask extends Vue {
    public $refs!: {
    desRef: any,
    };
    protected addTask() {
        if (!this.$refs.desRef.value) {
            alert('Please enter a task');
        } else {
        const randomId =  Math.floor(Math.random() * 100000);
        this.$apollo.mutate({
            mutation: ADD_TASK,
            variables: {
                description: this.$refs.desRef.value,
                isDone: false,
                id: randomId,
            },
            refetchQueries: ['todos'],
        });
        this.$refs.desRef.value = '';
        }
    }
}
</script>
