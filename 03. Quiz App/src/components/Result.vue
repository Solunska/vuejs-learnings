<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const { correctAnswers, quizQuestionLength } = defineProps(['quizQuestionLength', 'correctAnswers'])
</script>

<template>
    <div class="results">
        <p>Your Results...</p>
        <h1>{{ correctAnswers }}/{{ quizQuestionLength }}</h1>
        <RouterLink to="/">Go Back</RouterLink>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;
}

h1 {
    font-size: 80px;
}

a{
    color: #1f1f1f;
    background-color: rgb(244, 239, 239);
    padding: 1em;
    margin-top: 2em;
    text-decoration: none;
}
</style>