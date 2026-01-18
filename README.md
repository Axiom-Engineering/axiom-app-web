# Axiom App Web

A modern, high-performance web application built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/).

## 🚀 Technlogy Stack

This project leverages a robust modern stack to ensure performance, scalability, and developer experience:

-   **Core**: React 19, TypeScript
-   **Build Tool**: Vite 6 (Fast HMR & Bundling)
-   **Styling**:
    -   [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first CSS)
    -   [Material UI (MUI)](https://mui.com/) (Component Library)
    -   [Emotion](https://emotion.sh/) (CSS-in-JS)
-   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Linting**: ESLint with React Compiler support

## 📂 Project Structure

The project follows a feature-based architecture pattern:
```
src/
├── features/        # Feature-specific code
│   ├── admin-console/
│   └── workspace/
├── theme/           # Theme configuration and design tokens
├── assets/          # Static assets
└── App.tsx          # Main application entry
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd axiom-app-web
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📜 Scripts

-   `npm run dev`: Starts the Vite development server.
-   `npm run build`: Type-checks and builds the project for production.
-   `npm run preview`: Preview the production build locally.
-   `npm run lint`: Runs ESLint to check for code quality issues.
