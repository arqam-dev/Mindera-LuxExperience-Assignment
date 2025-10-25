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
