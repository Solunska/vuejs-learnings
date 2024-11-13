# Project 1: Counter App

## Description
A simple Vue counter application that lets users increment and decrement a displayed number with the click of a button. This project serves as an introduction to reactivity and template structure in Vue.

## Key Learnings

- **Reactivity with `ref`:**  
  Learned how to use `ref` to create reactive data. In this app, `count` is defined as a reactive variable using `ref(0)`, which makes Vue automatically update the display whenever `count` changes.

- **Event Handling with `@click`:**  
  Used Vue’s `@click` directive to handle button clicks, linking these events directly to the reactive variable. This provided hands-on experience in building user interactivity with simple event listeners.

- **Template Syntax:**  
  Practiced using Vue's templating features, such as `{{ }}`, to display reactive data within HTML. This template syntax is core to Vue and is key for binding dynamic data to the DOM.

- **Scoped CSS:**  
  Scoped CSS was used to apply styles only within this component, ensuring the button styles and container layout are specific to this app and do not affect other parts of the page.
