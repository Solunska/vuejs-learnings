<script setup>
import BreakingBadCards from './components/BreakingBadCards.vue';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then((registration) => {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch((error) => {
    console.log('Service Worker registration failed:', error);
  });
}

</script>

<template>
  <main>
    <div class="hero">
      <h1>Rick and Morty Charachters</h1>
    </div>
    <Suspense>
      <template #default>
        <BreakingBadCards />
      </template>
      <template #fallback>
        <div>
          <p>Loading...</p>
        </div>
      </template>
    </Suspense>
  </main>
</template>

<style scoped>
.hero {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column
}

.hero img {
  position: absolute;
  height: 700px;
  opacity: 0.1;
}

.hero h1 {
  font-size: 100px;
  font-weight: bold;
  color: rgb(27, 26, 26);
}

.hero p {
  cursor: pointer;
}
</style>