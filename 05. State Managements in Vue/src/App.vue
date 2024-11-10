<script setup>
import Parent from './components/Parent.vue';

// const numbers = ref([1, 2, 3, 4, 5, 6, 7]);
// provide("numbers", numbers);

</script>

<template>
  <main>
    <Parent />
  </main>
</template>

<style scoped>
main {
  background-color: rgb(193, 192, 195);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style>
