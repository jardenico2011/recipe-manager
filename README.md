# Recipe Manager

A data-driven recipe management application built with React, TypeScript, Vite, TanStack Query, Axios, Tailwind CSS, and DaisyUI.

## Features

- Search meals using TheMealDB API.
- View and save recipes.
- Store saved recipes using JSON Server.
- Edit recipe preparation time and notes.
- Delete saved recipes.
- Toggle favorite status with optimistic updates and rollback.
- Filter saved recipes by category.
- View total recipes and favorite counts.

## Technologies Used

- React 19
- TypeScript
- Vite
- TanStack Query
- Axios
- TheMealDB API
- JSON Server
- Tailwind CSS
- DaisyUI

## Requirements

- Node.js
- npm

## Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root using `.env.example` as a guide.

4. Start the JSON Server in one terminal:

```bash
npm run api
```

5. Start the Vite development server in another terminal:

```bash
npm run dev
```

6. Open `http://localhost:5173` in your browser.

## Environment Variables

```env
VITE_MEALDB_URL=https://www.themealdb.com/api/json/v1/1
VITE_API_URL=http://localhost:3001
```

## Local Database

The `db.json` file contains sample saved recipes. JSON Server provides the local REST API at `http://localhost:3001`.

## Production Build

Check the TypeScript code and create a production build:

```bash
npm run build
```

## Notes

This project is developed for PD 2 Major Assessment 2. The application uses TheMealDB for meal data and JSON Server for local recipe storage.