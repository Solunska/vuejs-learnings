<script setup>
import { fetchData } from '../../apiService';
import { onMounted, ref, watch } from 'vue';
import Card from './Card.vue';

const charachters = ref(null);
const errorMessage = ref(null);
const page = ref(1);

onMounted(async () => {
    try {
        charachters.value = await fetchData(page.value);
    } catch (error) {
        errorMessage.value = 'Unable to load data';
    }
});

watch(page,async  () => {
    charachters.value = await fetchData(page.value);
});

</script>

<template>
    <div class="container">
        <div class="button-container">
            <button @click="page--">&lt</button>
            <button @click="page++">></button>
        </div>
        <div class="cards">
            <Card v-for="charachter in charachters" :key="charachter.id" :image="charachter.image"
                :name="charachter.name" :species="charachter.species" />
        </div>
        <div class="button-container">
            <button @click="page--">&lt</button>
            <button @click="page++">></button>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: rgb(27, 26, 26);
    padding: 30px
}

.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.cards h3 {
    font-weight: bold;
}

.cards p {
    font-size: 10px;
}

.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    margin-bottom: 10px;
}

.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}
</style>
