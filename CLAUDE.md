# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimalist Next.js portfolio template built with TypeScript, React 19, and Tailwind CSS. It features a clean, modern design with a split-screen layout and smooth animations using Framer Motion.

## Development Commands

### Running the Development Server
```bash
npm run dev        # Runs with Turbopack for fast refresh
```

### Building for Production
```bash
npm run build      # Creates optimized production build
npm run start      # Starts production server
```

### Code Quality
```bash
npm run lint       # Runs ESLint with Next.js configuration
```

## High-Level Architecture

### Project Structure
The project uses Next.js 13+ App Router architecture:
- `/app` - Contains all application code using the new App Router
- `/app/components` - Reusable React components (ProfileSection, SkillsSection, ExperienceSection)
- `/public` - Static assets (images, etc.)

### Key Design Patterns
1. **Split-Screen Layout**: The main page uses a responsive grid with left column (profile) and right column (skills/experience)
2. **Component Architecture**: Each major section is a separate component for maintainability
3. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
4. **Animation**: Framer Motion for smooth entrance animations

### Core Dependencies
- **Next.js 15.1.6**: React framework with App Router
- **React 19.0.0**: UI library
- **TypeScript 5**: Type safety
- **Tailwind CSS 3.4.1**: Utility-first styling
- **Framer Motion 12.0.6**: Animation library

### Styling Approach
- Global styles in `app/globals.css`
- Tailwind utilities for component styling
- Custom fonts: Geist Sans and Geist Mono
- Consistent color scheme using Tailwind's gray scale

## Common Development Tasks

### Adding New Sections
1. Create a new component in `/app/components`
2. Import and add to the grid layout in `app/page.tsx`
3. Follow existing component patterns for consistency

### Updating Personal Information
Key files to modify:
- `app/layout.tsx` - Metadata (title, description, OG tags)
- `app/components/ProfileSection.tsx` - Personal details and social links
- `app/components/SkillsSection.tsx` - Technical skills
- `app/components/ExperienceSection.tsx` - Work history

### Replacing Images
- Add images to `/public` directory
- Update imports in components
- Use Next.js Image component for optimization

### Modifying Theme
- Colors: Update Tailwind config or use custom CSS properties
- Typography: Modify font imports in `layout.tsx`
- Spacing: Adjust Tailwind classes in components

## Important Considerations

1. **SEO**: The template includes comprehensive metadata setup in `layout.tsx`
2. **Performance**: Images should be optimized and use Next.js Image component
3. **Accessibility**: Maintain semantic HTML and proper ARIA attributes
4. **Responsive**: Test all changes across mobile, tablet, and desktop viewports
5. **TypeScript**: Maintain type safety when adding new components or props