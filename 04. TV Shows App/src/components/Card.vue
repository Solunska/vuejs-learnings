<script setup>
import { defineProps } from 'vue';
const { image, name, species } = defineProps(['image', 'name', 'species'])
</script>

<template>
    <n-card :title="name">
        <template #cover>
            <img :src="image">
        </template>
        <h3>{{ species }}</h3>
    </n-card>
</template>

<style scoped>
.n-card {
    width: 200px;
    margin: 10px 20px;

}

.n-card img {
    height: 250px
}

p {
    font-size: 10px;
}

</style>