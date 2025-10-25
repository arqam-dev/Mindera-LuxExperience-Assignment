import { useQuery } from '@tanstack/react-query';
import { tmdbService } from '../services/tmdb';
import { FilmCategoryType } from '../types/film';

export const useFilms = (category: FilmCategoryType) => {
  return useQuery({
    queryKey: ['films', category],
    queryFn: () => tmdbService.getFilms(category),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
