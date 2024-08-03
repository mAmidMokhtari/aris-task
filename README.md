# Expert Finder Application

## Overview

This is a single-page React application that displays a list of experts fetched from an external API. The application allows users to filter and search for experts based on various criteria.

## Technologies Used

- React with TypeScript
- Vite
- TailwindCSS
- React Query
- Zustand

## Setup and Run the Project Locally

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd my-expert-app

2. Install dependencies:
  npm install

3. Run the application:
   npm run dev

4. Open your browser and navigate to <http://localhost:3000>.

## Assumptions and Decisions

- The API provides all necessary data for experts.
- TailwindCSS is used for styling as it allows for rapid UI development.
- React Query is used for data fetching to handle caching and state management of server state.
- Zustand is used for global state management as it is lightweight and simple to use.
