<script setup>
// import useNumbers from '@/composables/useNumbers';
import { useNumbersStore } from '@/stores/numbers';

const {numbers, doubleNumber, filterNumbers} = useNumbersStore();

// const {numbers} = useNumbers();
</script>

<template>
    <div>
        <h1>Great Grand Child {{ filterNumbers(4) }}</h1>
        <div class="line"></div>
    </div>
</template>