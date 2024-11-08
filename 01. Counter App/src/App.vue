<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="container">
    <h2>
      The current count is...
    </h2>
    <h1>{{ count }}</h1>
    <div class="btn-container">
      <button @click="count--">-</button>
      <button @click="count++">+</button>
    </div>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn-container {
  display: flex;
  gap: 1em;
}

button {
  font-size: 1em;
  padding: 0.5em 1em;
}
</style>