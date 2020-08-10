<template>
  <div>
    <div class="text-4xl">Vue State Management for React Developers</div>
    <p>
      This simple website demonstrates component and state management in Vue
    </p>
    <button class="p-2 bg-blue-600 text-white shadow rounded hover:bg-blue-700 mt-8" @click="buttonClick">
      Goto the Todo's page
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    buttonClick() {
      this.$router.push("/todo");
    }
  }
};
</script>

<style></style>
