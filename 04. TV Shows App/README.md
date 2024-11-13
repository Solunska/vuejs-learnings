# Project 4: TV Show Characters App

## Description
This Vue.js application showcases characters from the Rick and Morty TV show, allowing users to navigate through character profiles with a seamless, paginated browsing experience. The app integrates both online and offline functionality, fetching data from an API when online and using cached data when offline to ensure accessibility. Styled with Naive UI and enhanced with scoped CSS, the app provides a visually engaging and user-friendly experience.

## Key Learnings

- **Offline-First Approach with LocalForage**  
    - Integrated **localforage** to store fetched character data locally, making it accessible even when offline.
    - Learned to manage conditional data retrieval based on network status, prioritizing cached data if the user is offline and updating it when back online.
- **Service Workers for Progressive Web App (PWA) Functionality**  
    - Registered a **service worker** to manage caching, allowing the app to load resources faster and enhancing offline capabilities.
- **Asynchronous API Handling with Axios**  
    - Utilized **Axios** to handle API calls to the Rick and Morty character API.
    - Implemented **error handling** to manage potential fetch failures, defaulting to cached data to provide a fallback when the network is unavailable.
- **Vue Suspense for Enhanced Loading States**  
    - Implemented Vue’s `<Suspense>` component to show a loading indicator while character data is fetched, providing immediate feedback and improving UX.