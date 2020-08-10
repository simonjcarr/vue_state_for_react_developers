<template>
  <div id="app">
    <Header />
    <div class="container mx-auto mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
