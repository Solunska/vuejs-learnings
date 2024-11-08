<script setup>
import { ref, watch, computed } from 'vue';
import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import Result from '../components/Result.vue';
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find(q => q.id === quizId);
const numOfQuestions = quiz.questions.length;
const currentQuestionIndex = ref(0);
const correctAnswers = ref(0);
const showResults = ref(false);

// it listens to any values that are in this computed function
const questionStatus = computed(() => `${currentQuestionIndex.value}/${numOfQuestions}`);
const barPercentage = computed(() => `${currentQuestionIndex.value / numOfQuestions * 100}%`)

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        correctAnswers.value++;
    }

    currentQuestionIndex.value++;

    if (currentQuestionIndex.value === numOfQuestions) {
        showResults.value = true
    }
}
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected" />
            <Result v-else :correctAnswers="correctAnswers" :quizQuestionLength="numOfQuestions" />
        </div>
    </div>
</template>
