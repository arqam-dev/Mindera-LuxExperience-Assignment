import { useWishlistStore } from '../store/wishlistStore';
import { FilmCard } from '../components/film/FilmCard';
import { useNavigate } from 'react-router-dom';

export const WishlistPage = () => {
  const { films, clearWishlist } = useWishlistStore();
  const navigate = useNavigate();

  if (films.length === 0) {
    return (
      <div className="wishlist-page wishlist-page--empty">
        <div className="wishlist-page__empty-content">
          <h2>Your Wishlist is Empty</h2>
          <p>Start adding films to your wishlist to see them here!</p>
          <button 
            className="wishlist-page__browse-btn"
            onClick={() => navigate('/')}
          >
            Browse Films
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-page__header">
        <h1>My Wishlist ({films.length})</h1>
        <button 
          className="wishlist-page__clear-btn"
          onClick={clearWishlist}
        >
          Clear All
        </button>
      </div>
      
      <div className="wishlist-page__grid">
        {films.map(film => (
          <div key={film.id} className="wishlist-page__item">
            <FilmCard film={film} category="popular" />
          </div>
        ))}
      </div>
    </div>
  );
};
