<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
const newNote = ref("");
const notes = ref([]);
const errorMessage = ref("");

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = () => {
  if (newNote.value.length < 10) {
    return errorMessage.value = "A note needs to be 10 charachters or more";
  }

  notes.value.push({
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor()
  });

  isModalOpen.value = false;
  newNote.value = "";
  errorMessage.value = "";
}

</script>

<template>
  <main>
    <div v-if="isModalOpen" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" name="node" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote()">Add Note</button>
        <button class="close" @click="isModalOpen = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="isModalOpen = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="(note, index) in notes" :key="index" class="card" :style="{ background: note.backgroundColor }">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;

}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(237, 182, 44);
  border-radius: 100%;
  color: black;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.main-text,
.date {
  color: #1f1f1f;
}

.date {
  font-size: 12.5px;
  font-weight: 500;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;

}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: rgb(237, 182, 44);
  border: none;
  color: aliceblue;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 10px;
}

.modal .close {
  background-color: rgb(193, 15, 15);

}

.modal p {
  color: red;
}
</style>