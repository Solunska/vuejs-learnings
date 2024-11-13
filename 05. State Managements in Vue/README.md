# Project 5: State Managements

## Description
The State Managements project is a Vue.js application that demonstrates the use of centralized state management with Pinia and the Composition API. The app features a multi-level component structure, where the state is managed in a central store and shared between nested components without relying on prop drilling.

## Key Learnings

- **State Management with Pinia**
    - Integrated **Pinia** for centralized state management, enabling a reactive store for managing the `numbers` array.
    - Defined a store using **Pinia** to handle state (`numbers`), actions (`addNumber`), and getters (`doubleNumber`, `filterNumbers`), making it easy to access and update state across components.

- **Composition API for Flexible Logic**
    - Used Vue’s **Composition API** to create reusable logic through custom hooks (e.g., `useNumbers`).
    - Leveraged **provide** and **inject** to manage state and functions across nested components without prop drilling.

- **Component Hierarchy and Data Flow**
    - Created a multi-level component hierarchy with **Parent**, **Child**, **GrandChild**, and **GreatGrandChild** components.
    - **Parent** component manages state and passes data to child components using **Pinia** store or Vue's `provide`/`inject` for state sharing.
- **Dynamic Data Handling**
    - Implemented dynamic number handling in the components, allowing for adding numbers and filtering them based on specific conditions.
    - Provided reactive updates across all components whenever the numbers array changes, utilizing the Pinia store.
