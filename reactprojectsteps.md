# React Project Setup Steps - LuxExperience Assignment

## Phase 1: Project Setup & Core Structure ✅

### Step 1: Initialize Project
```bash
npm init -y
npm install react react-dom @types/react @types/react-dom typescript
npm install vite @vitejs/plugin-react
npm install sass
```
*Basic project setup with React, TypeScript, Vite, and SCSS*

### Step 2: Create Configuration Files
```bash
# Create vite.config.ts, tsconfig.json, tsconfig.node.json
```
*Vite config for React, TypeScript strict config, and build settings*

### Step 3: Create Project Structure
```bash
mkdir src
mkdir src\components, src\pages, src\hooks, src\services, src\store, src\styles, src\types, src\utils, src\server
mkdir src\components\common, src\components\carousel, src\components\film, src\components\wishlist
```
*Modular folder structure for scalable development*

### Step 4: Create Basic Files
```bash
# Create index.html, src/main.tsx, src/App.tsx
```
*Entry point, React app structure, and basic component*

### Step 5: Create SCSS Files
```bash
# Create src/styles/variables.scss, src/styles/globals.scss
```
*SCSS variables and global styles with dark theme*

### Step 6: Create TypeScript Types
```bash
# Create src/types/film.ts, src/types/api.ts, src/types/common.ts
```
*TypeScript interfaces for films, API responses, and common types*

### Step 7: Create Utility Files
```bash
# Create src/utils/constants.ts
```
*Constants for TMDB API and category styles*

### Step 8: Update package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "type-check": "tsc --noEmit"
  }
}
```

## Phase 2: API Integration & Data Layer ✅

### Step 9: Install Dependencies
```bash
npm install @tanstack/react-query axios
```
*Data fetching and HTTP client libraries*

### Step 10: Create API Service Layer
```bash
# Create src/services/api.ts, src/services/tmdb.ts
```
*TMDB API integration with TypeScript types*

### Step 11: Create Custom Hooks
```bash
# Create src/hooks/useFilms.ts
```
*TanStack Query hooks for data fetching and caching*

### Step 12: Create Components
```bash
# Create src/components/film/FilmCard.tsx, src/components/common/LoadingSpinner.tsx
```
*Film display and loading components*

### Step 13: Add Styling
```bash
# Create src/styles/components/_film-card.scss, src/styles/components/_loading.scss
```
*Component-specific SCSS styles*

### Step 14: Update App Component
```bash
# Update src/App.tsx to use API data
```
*Integrate API data with React components*

### Step 15: Fix TypeScript Issues
```bash
# Create src/vite-env.d.ts for environment variables
```
*TypeScript environment variable definitions*

## Phase 3: Core Components Development ✅

### Step 16: Fix SCSS Variables
```bash
# Add @use '../variables' as *; to component SCSS files
```
*Fix SCSS variable imports in component files*

### Step 17: Create Carousel Component
```bash
# Create src/components/carousel/Carousel.tsx, src/styles/components/_carousel.scss
```
*Horizontal scrolling carousel for film categories*

### Step 18: Update App Layout
```bash
# Update src/App.tsx to use 3 carousels as per assignment
```
*Implement assignment requirements: 3 carousels for different categories*

### Step 19: Fix Mock Data
```bash
# Update src/services/mockData.ts with correct image paths
```
*Ensure all mock film images load properly*

### Step 20: Create Category-Specific Data
```bash
# Create src/services/mockDataCategories.ts with different films for each category
```
*Different mock data for Popular, Top Rated, and Now Playing*

### Step 21: Implement Category-Specific Fonts
```bash
# Update Carousel and FilmCard components with category props and fonts
```
*Category-specific fonts as per assignment requirements*

### Step 22: Add Carousel Navigation
```bash
# Add left/right navigation buttons to carousel
```
*Proper carousel with navigation arrows and smooth scrolling*

### Step 23: Expand Mock Data
```bash
# Double the length of each carousel array for better scrolling
```
*Each category now has 12 films instead of 6 for better carousel experience*
