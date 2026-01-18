# AGENTS.md

## Project Overview

**Axiom** is a high-performance, cloud-native **Knowledge Intelligence Platform** for companies, startups, and freelance engineering teams. It centralizes team knowledge, enforces coding standards, and accelerates onboarding using a distributed AI-powered ecosystem.

**This repository** (`axiom-app-web`) is the professional **React + TypeScript** web dashboard for admins, team members, and freelance engineers.

### Architecture Context

Axiom uses a **polyglot microservices architecture**:
- **[axiom-service-core](https://github.com/Axiom-Engineering/axiom-service-core)** - Java/Spring Boot for auth, RBAC, and core business logic
- **[axiom-service-ai](https://github.com/Axiom-Engineering/axiom-service-ai)** - Python RAG service using LangChain and vector databases
- **[axiom-app-web](https://github.com/Axiom-Engineering/axiom-app-web)** - React/TypeScript web dashboard (this repo)
- **[axiom-app-mobile](https://github.com/Axiom-Engineering/axiom-app-mobile)** - React Native mobile app
- **[axiom-infra-aws](https://github.com/Axiom-Engineering/axiom-infra-aws)** - Dockerized infrastructure on AWS

## Setup Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Run linter: `npm run lint`

## Tech Stack

- **Framework:** Vite + React 18
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Build Tool:** Vite with SWC for fast compilation
- **Backend Integration:** RESTful APIs to `axiom-service-core` and `axiom-service-ai`

## Code Style Guidelines

### TypeScript
- Use TypeScript strict mode
- Define interfaces for all props and API responses
- Prefer `interface` over `type` for object shapes
- Use explicit return types for functions
- Avoid `any` - use `unknown` or proper types

### React Components
- Use functional components with hooks
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks
- Use proper prop typing with interfaces


### File Naming
- Components: PascalCase (e.g., `AddService1.tsx`, `LocationInputs.tsx`)
- Utils/hooks: camelCase (e.g., `useFormDraft.ts`, `apiClient.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

### Code Organization
- Group related components in feature folders
- Keep utility functions in `src/utils/`
- API calls in dedicated service files
- Shared types in `src/types/`

## Key Features & Patterns

### API Integration
- Centralized API client configuration
- Proper error handling and user feedback
- Loading states for all async operations
- Authentication token management

## Testing Instructions

- Test changes locally before committing
- Ensure no TypeScript errors: `npm run build`
- Fix linting issues: `npm run lint`
- Test API integrations with backend services
- Verify responsive design on different screen sizes

## Security Considerations

- Never commit API keys or secrets to version control
- Use environment variables for all configuration
- Implement proper input validation and sanitization
- Follow OWASP guidelines for web security
- Sanitize user inputs before rendering
- Use proper authentication headers for API calls

## Integration Points

### Backend APIs
- **Core Service** (`axiom-service-core`): Authentication, user management, RBAC
- **AI Service** (`axiom-service-ai`): RAG queries, project intelligence, code analysis

### Authentication
- JWT-based authentication
- Token stored securely (not in localStorage)
- Refresh token handling
- Session timeout management

## Common Workflows

### Adding a New Feature
1. Create feature branch from `main`
2. Implement component with proper TypeScript types
3. Add necessary API integration
4. Test locally with backend services
5. Update documentation if needed
6. Create PR with clear description

### Working with Forms
1. Use `react-hook-form` for state management
2. Implement validation schema
3. Add draft auto-save functionality
4. Handle submission with proper error handling
5. Clear draft after successful submission

### API Integration
1. Define TypeScript interfaces for request/response
2. Create service function in appropriate file
3. Implement error handling
4. Add loading states in component
5. Test with actual backend

## Development Tips

- Use React DevTools for debugging component state
- Leverage TypeScript IntelliSense for type safety
- Use Vite's HMR for fast iteration
- Check browser console for warnings/errors
- Test with different user roles for RBAC features
- Verify responsive design using browser DevTools

## PR Guidelines

- Title format: `[Feature/Fix/Chore]: Brief description`
- Provide clear description of changes
- Reference related issues if applicable
- Ensure all checks pass (build, lint)
- Request review from team members
- Keep PRs focused and reasonably sized

## Troubleshooting

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Check for TypeScript errors: `npm run build`

### Type Errors
- Ensure all dependencies have types installed
- Check `tsconfig.json` configuration
- Use proper imports from typed modules

### Runtime Errors
- Check browser console for stack traces
- Verify API endpoint URLs and request formats
- Ensure environment variables are set correctly
- Check network tab for failed requests

---

**License:** MIT  
**Contact:** team@axiom-engineering.com  
**Repository:** [axiom-app-web](https://github.com/Axiom-Engineering/axiom-app-web)
