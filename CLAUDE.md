# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript landing page application for Visual Layer, a manufacturing AI-powered defect detection platform. The project uses Vite for development and build tooling, with a comprehensive UI component library built on Radix UI primitives and Tailwind CSS.

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start development server (runs on port 3000, opens automatically)
- `npm run build` - Build for production (outputs to `build/` directory)

## Project Architecture

### Core Structure
- **Entry Point**: `src/main.tsx` → `src/App.tsx`
- **Main App**: Single-page landing application with multiple sections
- **Styling**: Tailwind CSS with custom design system (see `src/index.css`)
- **Components**: Radix UI-based component library in `src/components/ui/`

### Key Application Sections
1. **Hero Section** (`src/App.tsx:11-69`) - Main headline with demo form
2. **Benefits Section** (`src/App.tsx:72-110`) - Three-column feature cards
3. **Visual Section** (`src/App.tsx:113-149`) - Product imagery and benefits
4. **Technology Section** (`src/App.tsx:152-191`) - Enterprise features grid
5. **Newsletter Section** (`src/App.tsx:194-198`) - Email signup

### Custom Components
- `DemoForm` (`src/components/demo-form.tsx`) - Lead capture form with validation
- `NewsletterSignup` (`src/components/newsletter-signup.tsx`) - Email subscription component
- `ImageWithFallback` (`src/components/figma/ImageWithFallback.tsx`) - Image component with fallback handling

### Component Library
Comprehensive set of reusable UI components in `src/components/ui/`:
- Form components (Input, Button, Select, Textarea, etc.)
- Layout components (Card, Separator, etc.)
- Overlay components (Dialog, Popover, Tooltip, etc.)
- Data display components (Badge, Avatar, etc.)
- All built on Radix UI primitives for accessibility

### Styling System
- **Design Tokens**: Custom CSS variables in `src/index.css` (colors, spacing, typography)
- **Utility Classes**: Tailwind CSS with custom configuration
- **Component Styling**: Uses `cn()` utility function (`src/components/ui/utils.ts`) for conditional classes
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Dependencies Note
- All UI components use Radix UI primitives for accessibility
- Lucide React for icons throughout the application
- React Hook Form for form handling
- Recharts for potential data visualization
- Extensive alias configuration in `vite.config.ts` for versioned imports

## Development Notes
- No linting or testing commands configured - verify code quality manually
- Uses SWC for fast React compilation via Vite
- Server configured to run on port 3000 with auto-open
- All form submissions currently log to console (placeholder implementations)