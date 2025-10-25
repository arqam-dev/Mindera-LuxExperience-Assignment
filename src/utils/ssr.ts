import { QueryClient } from '@tanstack/react-query';
import { tmdbService } from '../services/tmdb';

export const prefetchFilms = async (queryClient: QueryClient) => {
  const categories = ['popular', 'top_rated', 'now_playing'] as const;
  
  const prefetchPromises = categories.map(category => 
    queryClient.prefetchQuery({
      queryKey: ['films', category],
      queryFn: () => tmdbService.getFilms(category),
      staleTime: 1000 * 60 * 5,
    })
  );

  await Promise.all(prefetchPromises);
};

export const prefetchFilm = async (queryClient: QueryClient, filmId: number) => {
  await queryClient.prefetchQuery({
    queryKey: ['film', filmId],
    queryFn: () => tmdbService.getFilmById(filmId),
    staleTime: 1000 * 60 * 5,
  });
};

export const getMetaTags = (film?: any, category?: string) => {
  if (!film) {
    return {
      title: 'LuxExperience - Film Browsing Application',
      description: 'Browse films by categories with wishlist functionality',
      ogTitle: 'LuxExperience - Film Browsing Application',
      ogDescription: 'Browse films by categories with wishlist functionality',
    };
  }

  return {
    title: `${film.title} - LuxExperience`,
    description: film.overview || 'Browse films by categories with wishlist functionality',
    ogTitle: `${film.title} - LuxExperience`,
    ogDescription: film.overview || 'Browse films by categories with wishlist functionality',
    ogImage: `https://image.tmdb.org/t/p/w1280${film.backdrop_path}`,
    ogType: 'video.movie',
  };
};
