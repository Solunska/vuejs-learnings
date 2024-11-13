# Project 2: Notes App

## Description
A Vue application that allows users to create and store notes. The app includes a modal for adding new notes and displays each note with a random background color and timestamp. This project introduces more advanced features in Vue, such as conditional rendering, form handling, and dynamic styling.

## Key Learnings

- **Conditional Rendering with `v-if`:**  
  Learned to use `v-if` to conditionally render the modal overlay based on the `isModalOpen` state. This provided experience in controlling component visibility based on application state.

- **Reactivity with `ref` for Multiple Variables:**  
  Expanded use of `ref` to handle multiple reactive variables (`newNote`, `notes`, `isModalOpen`, and `errorMessage`). This helped build familiarity with managing different aspects of the app’s state reactively.

- **Form Handling with `v-model`:**  
  Used `v-model` to bind user input from a `<textarea>` to the `newNote` variable, allowing for seamless two-way data binding. Practiced using `v-model.trim` to automatically remove whitespace from the input.

- **Error Handling and Validation:**  
  Implemented input validation to check if a note has at least 10 characters. If the requirement is not met, `errorMessage` displays feedback to the user. This introduced the process of validating user input and displaying error messages dynamically.

- **Dynamic Styling with Inline `style`:**  
  Used inline `:style` binding to apply a randomly generated background color to each note card, allowing each note to have a unique visual appearance.

- **Scoped CSS for Component-Specific Styling:**  
  Scoped CSS was used to contain styling within the component. Styles like the layout of the modal and buttons are isolated from other potential components on the page.