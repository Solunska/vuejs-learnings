# Project 3: Quiz App

## Description
A dynamic quiz application built with Vue.js that allows users to browse quizzes, search through quiz titles, answer questions within each quiz, track their progress, and view their final results. This project showcases various Vue concepts like reactive properties, computed values, component-based architecture, and basic routing.

## Key Learnings

- **Reactivity with `ref` and `watch`**  
  - Utilized `ref` to create reactive data structures, such as `quizes` and `search`, enabling real-time updates to quiz filtering based on user input.
  - Employed `watch` on the `search` field to filter quiz results dynamically, refining the quiz list display as the user types.
- **Component-Based Structure**  
  - Broke down the app into distinct, reusable components (`Card`, `QuizHeader`, `Question`, `Result`), each handling specific parts of the UI and logic.
  - The Card component displays individual quizzes, `QuizHeader` shows progress, `Question` handles user options, and `Result` displays the final score. This structure promotes separation of concerns, making the app modular and maintainable.
- **Routing with `vue-router`**  
  - Set up `vue-router` to handle navigation between pages (`QuizesView` for the list of quizzes and `QuizView` for quiz details).
  - Defined routes with parameters (e.g., `/quiz/:id`), enabling dynamic loading of each quiz based on its unique ID.
- **Event Handling and Emitting**  
  - Used Vue’s `@click` directive to handle user interactions, such as selecting a quiz option or navigating between quizzes.
  - Employed `defineEmits` to emit custom events from child components (e.g., `selectOption` in the `Question` component), allowing parent components to respond to specific actions and manage the app’s state.
- **Computed Properties for Progress Tracking**  
  - Implemented computed properties (`questionStatus` and `barPercentage`) to dynamically track and display the user’s progress within a quiz.
  - These computed values update as the user answers questions, providing real-time feedback on their progress and ensuring a smooth user experience.
