<script setup>
import GrandChild from './GrandChild.vue';
import useNumbers from '@/composables/useNumbers';
import { useNumbersStore } from '@/stores/numbers';

const {numbers, addNumber} = useNumbersStore();

// const {numbers, addNumber} = useNumbers();

// import { inject } from 'vue';
// const numbers = inject("numbers");

</script>

<template>
    <div>
        <h1>Child {{ numbers }}</h1>
        <button @click="addNumber(4)">add</button>
        <div class="line"></div>
        <GrandChild />
    </div>
</template>