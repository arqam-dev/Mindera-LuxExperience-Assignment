import { api } from './api';
import { Film, FilmCategoryType } from '../types/film';
import { ApiResponse } from '../types/api';
import { popularFilms, topRatedFilms, nowPlayingFilms } from './mockDataCategories';

const hasApiKey = import.meta.env.VITE_TMDB_API_KEY && import.meta.env.VITE_TMDB_API_KEY !== 'demo_key';

const getMockFilmsByCategory = (category: FilmCategoryType): Film[] => {
  switch (category) {
    case 'popular':
      return popularFilms;
    case 'top_rated':
      return topRatedFilms;
    case 'now_playing':
      return nowPlayingFilms;
    default:
      return popularFilms;
  }
};

export const tmdbService = {
  getFilms: async (category: FilmCategoryType): Promise<Film[]> => {
    if (!hasApiKey) {
      // Return category-specific mock data when no API key is available
      return getMockFilmsByCategory(category);
    }
    
    const response = await api.get<ApiResponse<Film>>(`/movie/${category}`);
    return response.data.results;
  },
  
  getFilmById: async (id: number): Promise<Film> => {
    if (!hasApiKey) {
      // Return mock film by ID from any category
      const allFilms = [...popularFilms, ...topRatedFilms, ...nowPlayingFilms];
      const film = allFilms.find(f => f.id === id);
      if (!film) throw new Error('Film not found');
      return film;
    }
    
    const response = await api.get<Film>(`/movie/${id}`);
    return response.data;
  },
};
