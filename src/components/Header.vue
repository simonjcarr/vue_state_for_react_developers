<template>
  <div class="w-full h-16 pt-2 relative bg-black">
    <div class="flex justify-around">
      <div class="text-4xl text-white">TODO's</div>
      <div class="flex">
        <div class="mr-8"><router-link class="text-white" to="/">Home</router-link></div>
        <div class="mr-8"><router-link class="text-white" to="/todo">Todo's</router-link></div>
        <div><router-link class="text-white" to="/simple">Simple</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
