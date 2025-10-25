import { describe, it, expect } from 'vitest';
import { getMetaTags } from '../ssr';

describe('SSR Utils', () => {
  describe('getMetaTags', () => {
    it('should return default meta tags when no film provided', () => {
      const metaTags = getMetaTags();
      
      expect(metaTags.title).toBe('LuxExperience - Film Browsing Application');
      expect(metaTags.description).toBe('Browse films by categories with wishlist functionality');
      expect(metaTags.ogTitle).toBe('LuxExperience - Film Browsing Application');
      expect(metaTags.ogDescription).toBe('Browse films by categories with wishlist functionality');
    });

    it('should return film-specific meta tags when film provided', () => {
      const film = {
        id: 1,
        title: 'The Dark Knight',
        overview: 'When the menace known as the Joker wreaks havoc...',
        backdrop_path: '/test-backdrop.jpg'
      };

      const metaTags = getMetaTags(film);
      
      expect(metaTags.title).toBe('The Dark Knight - LuxExperience');
      expect(metaTags.description).toBe('When the menace known as the Joker wreaks havoc...');
      expect(metaTags.ogTitle).toBe('The Dark Knight - LuxExperience');
      expect(metaTags.ogDescription).toBe('When the menace known as the Joker wreaks havoc...');
      expect(metaTags.ogImage).toBe('https://image.tmdb.org/t/p/w1280/test-backdrop.jpg');
      expect(metaTags.ogType).toBe('video.movie');
    });

    it('should handle film without overview', () => {
      const film = {
        id: 1,
        title: 'Test Film',
        overview: null,
        backdrop_path: '/test-backdrop.jpg'
      };

      const metaTags = getMetaTags(film);
      
      expect(metaTags.description).toBe('Browse films by categories with wishlist functionality');
      expect(metaTags.ogDescription).toBe('Browse films by categories with wishlist functionality');
    });
  });
});
