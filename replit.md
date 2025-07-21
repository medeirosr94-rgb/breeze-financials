# Replit MD File

## Overview

This is a full-stack web application for Breeze Financials, a Toronto-based business offering bookkeeping and fractional CFO services. The application is built as a high-converting landing page focused on lead generation through a free bookkeeping audit offering, with the ultimate goal of converting visitors into fractional CFO clients.

The project follows a modern full-stack architecture with a React frontend, Express.js backend, and PostgreSQL database using Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with a custom design system
- **shadcn/ui** component library for consistent UI elements
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query** for server state management and API calls
- **React Hook Form** with Zod validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** for database operations and type-safe queries
- RESTful API design with JSON responses
- Centralized error handling middleware
- Request logging middleware for API monitoring

### Styling and Design System
- **Tailwind CSS** with custom CSS variables for theming
- **Radix UI** primitives for accessible component foundations
- Custom brand colors (teal-based palette for "Breeze" theme)
- Responsive design with mobile-first approach
- CSS animations for enhanced user experience

## Key Components

### Landing Page Structure
1. **Header/Navigation**: Sticky navigation with smooth scrolling to sections
2. **Hero Section**: Primary value proposition with lead capture form
3. **Value Ladder**: Comparison between bookkeeping and fractional CFO services
4. **Benefits Section**: Key advantages of fractional CFO services
5. **Process Section**: 3-step process explanation
6. **Testimonials**: Social proof from clients
7. **About Section**: Personal introduction of the CFO
8. **Final CTA**: Strong call-to-action for conversion
9. **Footer**: Contact information and additional links
10. **Floating CTA**: Persistent action button that appears on scroll

### Form Management
- Lead capture forms for free audit requests
- Contact forms for general inquiries
- Real-time form validation using Zod schemas
- Toast notifications for user feedback
- Integration-ready for email services (Mailgun, SendGrid, etc.)

### UI Components
- Comprehensive set of reusable UI components from shadcn/ui
- Custom components for business-specific needs
- Accessible design patterns following WCAG guidelines
- Responsive components that work across all device sizes

## Data Flow

### Lead Generation Flow
1. User fills out lead capture form (name, email, business name)
2. Frontend validates data using Zod schemas
3. API request sent to `/api/leads` endpoint
4. Backend validates and stores lead in PostgreSQL database
5. Success/error response sent back to frontend
6. Toast notification displayed to user
7. Form resets on successful submission

### Contact Form Flow
1. Similar to lead generation but includes message field
2. Uses `/api/contact` endpoint
3. Stores as lead with "contact_form" source identifier

### Data Storage
- **Users table**: Basic user authentication structure (prepared for future admin features)
- **Leads table**: Stores all lead information with timestamps and source tracking
- Database migrations managed through Drizzle Kit
- Type-safe database queries using Drizzle ORM

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Neon PostgreSQL database driver
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@tanstack/react-query**: Server state management
- **zod**: Runtime type validation
- **react-hook-form**: Form state management

### UI and Styling
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management
- **lucide-react**: Icon library
- **react-icons**: Additional icon set

### Development Tools
- **typescript**: Type checking
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `drizzle-kit push`

### Environment Configuration
- Development: Uses tsx for hot reloading and Vite dev server
- Production: Serves static files and runs compiled Node.js server
- Database URL required via `DATABASE_URL` environment variable

### Deployment Architecture
- Static frontend assets served from `dist/public`
- Express server handles API routes and serves frontend in production
- PostgreSQL database (configured for Neon but compatible with any Postgres)
- Environment-based configuration for development vs production

### Performance Optimizations
- Vite for fast builds and hot module replacement
- React Query for efficient data fetching and caching
- Tailwind CSS purging for minimal bundle size
- Express middleware for request logging and error handling