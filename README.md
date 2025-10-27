# React Jobs

A modern job listing application built with React, TypeScript, and Vite.

## 🚀 Tech Stack

### Frontend

- **React 19** - A JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend build tool
- **React Router DOM** - Client-side routing
- **TailwindCSS 4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **Lucide React** - Beautiful & consistent icon toolkit

### Form Management & Validation

- **React Hook Form** - Performant, flexible forms
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolvers for React Hook Form

### UI Components

- **shadcn/ui** components (Avatar, Label, Select, Separator, etc.)
- **class-variance-authority** - CSS class variance management
- **Sonner** - Toast notifications

### Development Tools

- **ESLint** - Code linting
- **JSON Server** - Mock REST API
- **TypeScript ESLint** - TypeScript linting rules

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abdosamiir/react-jobs.git
   cd react-jobs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Running the Project

To run the project locally, you need to start both the development server and the mock API server:

1. **Start the Vite development server**

   Open your terminal and run:

   ```bash
   npm run dev
   ```

   This will start the application on `http://localhost:5173` (or another port if 5173 is busy)

2. **Start the JSON Server (Mock API)**

   Open another terminal and run:

   ```bash
   npm run server
   ```

   This will start the mock API server on `http://localhost:8000`

Now you can access the application in your browser!

## 📦 Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

## 👀 Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🔍 Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
react-jobs/
├── public/          # Static assets
├── src/
│   ├── app/
│   │   ├── assets/      # Images, fonts, etc.
│   │   ├── components/  # Reusable components
│   │   ├── layouts/     # Layout components
│   │   ├── lib/         # Utilities and data
│   │   ├── pages/       # Page components
│   │   └── Schema/      # Zod schemas
│   └── main.tsx     # Application entry point
├── package.json
└── vite.config.ts   # Vite configuration
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run server` - Start JSON Server mock API

## 📄 License

This project is private and not licensed for public use.
