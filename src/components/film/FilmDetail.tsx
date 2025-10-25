import { Film } from '../../types/film';
import { useWishlistStore } from '../../store/wishlistStore';

interface FilmDetailProps {
  film: Film;
  category: 'popular' | 'top_rated' | 'now_playing';
}

export const FilmDetail = ({ film, category }: FilmDetailProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(film.id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(film.id);
    } else {
      addToWishlist(film);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`film-detail film-detail--${category}`}>
      <div className="film-detail__backdrop">
        <img
          src={`https://image.tmdb.org/t/p/w1280${film.backdrop_path}`}
          alt={film.title}
          className="film-detail__backdrop-image"
        />
        <div className="film-detail__backdrop-overlay"></div>
      </div>
      
      <div className="film-detail__content">
        <div className="film-detail__poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
            className="film-detail__poster-image"
          />
        </div>
        
        <div className="film-detail__info">
          <h1 className="film-detail__title">{film.title}</h1>
          
          <div className="film-detail__meta">
            <span className="film-detail__rating">
              ⭐ {film.vote_average.toFixed(1)}/10
            </span>
            <span className="film-detail__date">
              {formatDate(film.release_date)}
            </span>
          </div>
          
          <p className="film-detail__overview">{film.overview}</p>
          
          <div className="film-detail__actions">
            <button
              className={`film-detail__wishlist-btn ${inWishlist ? 'film-detail__wishlist-btn--active' : ''}`}
              onClick={handleWishlistToggle}
            >
              {inWishlist ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
