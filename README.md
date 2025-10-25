# LuxExperience - Film Browsing Web Application

## Problem Statement

Implement a web application to browse films by categories with the following requirements:

- **Homepage**: 3 carousels displaying films from different categories
- **Film Detail Page**: Detailed view with description, image, and category-specific styling
- **Wishlist Feature**: Add films to wishlist and view saved items
- **Category Differentiation**: Different fonts, buttons, and styling per category

## Tech Stack & Dependencies

### Core Technologies
- **React 18.2.0** with **TypeScript 5.0+**
- **Vite 5.0+** for bundling and development
- **SCSS** for styling (no CSS Modules, Styled Components, or Tailwind)
- **Node.js 18+** for SSR support

### Routing & State Management
- **React Router DOM 6.8+** for client-side routing
- **Zustand 4.3+** for state management (lightweight alternative to Redux)

### Data Fetching
- **TanStack Query 4.29+** for server state management and caching
- **Axios 1.3+** for HTTP requests

### External API
- **TheMovieDatabase (TMDB) API** for film data

### Development Tools
- **ESLint 8.0+** with TypeScript support
- **Prettier 2.8+** for code formatting
- **TypeScript 5.0+** for type safety

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header/
│   │   ├── Button/
│   │   └── LoadingSpinner/
│   ├── carousel/
│   │   ├── Carousel.tsx
│   │   ├── CarouselItem.tsx
│   │   └── Carousel.module.scss
│   ├── film/
│   │   ├── FilmCard.tsx
│   │   ├── FilmDetail.tsx
│   │   └── FilmCard.module.scss
│   └── wishlist/
│       ├── WishlistButton.tsx
│       └── WishlistPage.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── FilmDetailPage.tsx
│   └── WishlistPage.tsx
├── hooks/
│   ├── useFilms.ts
│   ├── useWishlist.ts
│   └── useSSR.ts
├── services/
│   ├── api.ts
│   ├── tmdb.ts
│   └── ssr.ts
├── store/
│   ├── wishlistStore.ts
│   └── filmStore.ts
├── styles/
│   ├── globals.scss
│   ├── variables.scss
│   ├── mixins.scss
│   └── components/
│       ├── _carousel.scss
│       ├── _film-card.scss
│       └── _wishlist.scss
├── types/
│   ├── film.ts
│   ├── api.ts
│   └── common.ts
├── utils/
│   ├── constants.ts
│   ├── helpers.ts
│   └── categoryStyles.ts
├── server/
│   ├── server.ts
│   ├── routes.ts
│   └── ssr.ts
└── App.tsx
```

## Implementation Plan

### Phase 1: Project Setup & Core Structure ✅
1. ✅ Initialize Vite project with React + TypeScript template
2. ✅ Configure SCSS support and build pipeline
3. ✅ Set up ESLint, Prettier, and TypeScript configuration
4. ✅ Create basic folder structure and routing setup
5. ⏳ Implement SSR foundation with custom server setup

### Phase 2: API Integration & Data Layer
1. Set up TMDB API integration with proper TypeScript types
2. Implement TanStack Query for data fetching and caching
3. Create film service layer with category filtering
4. Set up error handling and loading states

### Phase 3: Core Components Development
1. Build reusable Carousel component with touch/swipe support
2. Create FilmCard component with hover effects
3. Implement Header component with navigation
4. Develop responsive grid system using SCSS

### Phase 4: Film Detail Page & Category Styling
1. Create FilmDetail component with dynamic styling
2. Implement category-specific fonts and button styles
3. Add image optimization and lazy loading
4. Build wishlist functionality with Zustand store

### Phase 5: Wishlist Feature
1. Implement wishlist state management
2. Create wishlist page with grid layout
3. Add wishlist persistence (localStorage)
4. Implement add/remove wishlist actions

### Phase 6: SSR Implementation
1. Set up server-side rendering for initial page load
2. Implement data prefetching for SEO optimization
3. Add meta tags and Open Graph support
4. Configure build process for production deployment

### Phase 7: Testing & Optimization
1. Add unit tests for utility functions
2. Implement integration tests for key user flows
3. Performance optimization and bundle analysis
4. Accessibility improvements and keyboard navigation

## Key Features

### Homepage
- Three horizontal carousels for different film categories
- Smooth scrolling and touch/swipe support
- Responsive design for mobile and desktop
- Loading states and error handling

### Film Detail Page
- Large film poster with high-quality image
- Detailed description and metadata
- Category-specific styling (fonts, colors, buttons)
- Add to wishlist functionality
- Back navigation and breadcrumbs

### Wishlist
- Grid layout showing saved films
- Remove from wishlist functionality
- Persistent storage across sessions
- Empty state with call-to-action

### SSR Features
- Server-side rendering for initial page load
- Meta tags for SEO optimization
- Prefetching of critical data
- Progressive enhancement

## Development Guidelines

### Code Quality
- Follow TypeScript best practices with strict typing
- Implement proper error boundaries
- Use semantic HTML and ARIA attributes
- Follow BEM methodology for SCSS class naming

### Performance
- Implement code splitting for route-based chunks
- Use React.memo for expensive components
- Optimize images with proper sizing and formats
- Minimize bundle size with tree shaking

### Testing Strategy
- Unit tests for utility functions and hooks
- Integration tests for user interactions
- Visual regression testing for components
- Performance testing for SSR implementation

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up TMDB API key in environment variables
4. Run development server: `npm run dev`
5. Build for production: `npm run build`
6. Start SSR server: `npm run start`

## Environment Variables

```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run start` - Start SSR server
- `npm run test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
