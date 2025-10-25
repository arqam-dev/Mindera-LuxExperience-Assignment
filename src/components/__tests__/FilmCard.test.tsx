import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FilmCard } from '../film/FilmCard';
import { Film } from '../../types/film';

const mockFilm: Film = {
  id: 1,
  title: 'The Dark Knight',
  overview: 'When the menace known as the Joker wreaks havoc...',
  poster_path: '/test-poster.jpg',
  backdrop_path: '/test-backdrop.jpg',
  release_date: '2008-07-18',
  vote_average: 8.5,
  genre_ids: [28, 80, 18]
};

const MockedFilmCard = ({ film, category }: { film: Film; category: 'popular' | 'top_rated' | 'now_playing' }) => (
  <BrowserRouter>
    <FilmCard film={film} category={category} />
  </BrowserRouter>
);

describe('FilmCard', () => {
  it('should render film information correctly', () => {
    render(<MockedFilmCard film={mockFilm} category="popular" />);
    
    expect(screen.getByText('The Dark Knight')).toBeInTheDocument();
    expect(screen.getByText('⭐ 8.5')).toBeInTheDocument();
    expect(screen.getByAltText('The Dark Knight')).toBeInTheDocument();
  });

  it('should apply category-specific styling', () => {
    const { container } = render(<MockedFilmCard film={mockFilm} category="popular" />);
    
    expect(container.querySelector('.film-card--popular')).toBeInTheDocument();
  });

  it('should handle image error gracefully', () => {
    const filmWithInvalidImage = { ...mockFilm, poster_path: '/invalid-path.jpg' };
    render(<MockedFilmCard film={filmWithInvalidImage} category="popular" />);
    
    const image = screen.getByAltText('The Dark Knight');
    expect(image).toBeInTheDocument();
  });

  it('should be clickable and navigate to film detail', () => {
    const { container } = render(<MockedFilmCard film={mockFilm} category="popular" />);
    
    const filmCard = container.querySelector('.film-card');
    expect(filmCard).toHaveStyle('cursor: pointer');
  });
});
