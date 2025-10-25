export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const FILM_CATEGORIES = {
  popular: 'Popular',
  top_rated: 'Top Rated',
  now_playing: 'Now Playing'
} as const;

export const CATEGORY_STYLES = {
  popular: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    buttonStyle: 'primary',
    primaryColor: '#e50914',
    secondaryColor: '#ffffff'
  },
  top_rated: {
    fontFamily: 'Georgia, serif',
    buttonStyle: 'secondary',
    primaryColor: '#ffd700',
    secondaryColor: '#000000'
  },
  now_playing: {
    fontFamily: 'Impact, sans-serif',
    buttonStyle: 'accent',
    primaryColor: '#00ff00',
    secondaryColor: '#000000'
  }
} as const;
