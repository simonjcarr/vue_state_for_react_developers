<template>
  <div>
    <div class="text-3xl">Todo's ({{tasks.length}})</div>
    <form @submit.prevent="addTaskSubmit" class="flex mb-4">
      <input
        type="text"
        placeholder="Enter a new task"
        class="w-full p-2 shadow rounded-l bg-blue-200 text-blue-600"
        v-model="newTask"
      />
      <button
        type="submit"
        class="bg-blue-400 rounded-r shadow w-32 text-blue-800"
      >
        Save
      </button>
    </form>
    <div
      class="flex p-2 border-b-2 border-blue-200"
      v-for="task in tasks"
      :key="task.id"
    >
      <div class="w-1/6">
        <button
          class="text-red-500 font-bold text-xl mr-4"
          @click="deleteTask(task.id)"
        >
          X
        </button>
        <button
          class="p-1 rounded shadow "
          :class="{
            'bg-green-500 text-white': !task.complete,
            'bg-red-500 text-white': task.complete
          }"
          @click="setTaskStatus({ id: task.id, status: !task.complete })"
        >
          {{ task.complete ? "Mark not Complete" : "Mark Complete" }}
        </button>
      </div>
      <div
        class="w-5/6"
        :class="{ 'text-red-500 line-through': task.complete }"
      >
        {{ task.title }}
        {{ task.complete ? ` Complete by ${task.completedBy}` : "" }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      newTask: ""
    };
  },
  computed: {
    ...mapState("Todo", ["tasks"])
  },
  methods: {
    ...mapActions("Todo", ["addTask", "deleteTask", "setTaskStatus"]),
    addTaskSubmit() {
      this.addTask(this.newTask);
      this.newTask = "";
    }
  }
};
</script>

<style></style>
