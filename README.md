# Expert Finder Application

## Overview

The Expert Finder Application is a single-page React application designed to display and manage a list of experts fetched from an external API. Users can easily filter and search for experts based on various criteria, making it a powerful tool for quickly finding the right expertise.

## Technologies Used

- **React** with **TypeScript**: For building a dynamic and type-safe user interface.
- **Vite**: A fast build tool for front-end development.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development and responsive design.
- **React Query**: For efficient data fetching, caching, and synchronization of server state.
- **Zustand**: A minimalistic state management solution for managing global state in the application.

## Getting Started

Follow the steps below to set up and run the project locally:

### Prerequisites

Ensure that you have [Node.js](https://nodejs.org/) installed on your machine. You can check your version through the command:

```bash
node -v
```

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/mAmidMokhtari/aris-task.git
   cd aris-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run dev
   ```

4. Access the application:
   Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Features

- Comprehensive search functionality to filter experts by various criteria.
- Intuitive user interface styled with TailwindCSS.
- Efficient data fetching and caching with React Query.
- Simple state management with Zustand.

## Assumptions and Design Decisions

- The API provides all necessary data for the experts, including name, expertise, and availability.
- TailwindCSS has been chosen for its utility-first approach, allowing for rapid prototyping and flexibility in design.
- React Query supports robust data fetching patterns, including caching and fetching on-demand.
- Zustand was selected for global state management due to its simplicity and ease of use, making it well-suited for this scale of application.
