https://recipe-manager-sable.vercel.app

![Recipe Manager Screenshot](screenshots/rollback-test.png)

# Recipe Manager

A multi-page recipe management application built with React, TypeScript, Vite, and TheMealDB API.

## Live Demo

https://recipe-manager-sable.vercel.app

## Features

- Search meals using TheMealDB API.
- View recipe details, ingredients, and images.
- Save recipes to a personal collection.
- Sign in using a display name.
- Protect the saved recipes page from signed-out users.
- Store saved recipes and login state using browser localStorage.
- Edit recipe preparation time and notes.
- Delete saved recipes.
- Toggle favorite status with optimistic updates and rollback.
- Filter saved recipes by category.
- View total recipes and favorite counts.
- Navigate between pages using React Router.
- Display a custom 404 page for unknown routes.

## Routes

- `/` — Search recipes.
- `/login` — Sign in using a display name.
- `/saved` — Protected saved recipes collection.
- `/recipe/:mealId` — View recipe details.
- Other paths — 404 page.

## Technologies Used

- React 19
- TypeScript
- Vite
- React Router DOM
- TanStack Query
- Axios
- TheMealDB API
- Browser localStorage
- Tailwind CSS
- DaisyUI

## Requirements

- Node.js
- npm

## Getting Started

1. Clone the repository:

   `git clone https://github.com/jardenico2011/recipe-manager.git`

2. Open the project folder:

   `cd recipe-manager`

3. Install dependencies:

   `npm install`

4. Create your `.env` file:

   Windows CMD:

   `copy .env.example .env`

5. Start the development server:

   `npm run dev`

6. Open `http://localhost:5173` in your browser.

## Environment Variables

```env
VITE_MEALDB_URL=https://www.themealdb.com/api/json/v1/1
```

## Data Storage and Authentication

Saved recipes and the demo display name are stored in the browser's localStorage. The login feature demonstrates React context and protected routing. It does not use a backend, passwords, or production-grade authentication.

## Production Build

Run the following command:

`npm run build`

## Deployment

The application is deployed on Vercel.

The `vercel.json` rewrite allows users to open nested routes directly and refresh pages without receiving a Vercel 404 error.

## Project Information

Developed for PD 2 Major Assessment 3.
