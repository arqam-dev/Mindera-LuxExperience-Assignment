import { Film } from '../../types/film';
import { WishlistButton } from '../wishlist/WishlistButton';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface FilmCardProps {
  film: Film;
  category: 'popular' | 'top_rated' | 'now_playing';
}

export const FilmCard = ({ film, category }: FilmCardProps) => {
  const navigate = useNavigate();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2NjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
  };

  const handleCardClick = () => {
    navigate(`/film/${film.id}/${category}`);
  };

  return (
    <div className={`film-card film-card--${category}`} onClick={handleCardClick}>
      <div className="film-card__image-container">
        <img 
          src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} 
          alt={film.title}
          className="film-poster"
          onError={handleImageError}
        />
        <WishlistButton film={film} category={category} />
      </div>
      <h3 className="film-title">{film.title}</h3>
      <p className="film-rating">⭐ {film.vote_average.toFixed(1)}</p>
    </div>
  );
};
