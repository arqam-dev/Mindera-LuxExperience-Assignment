import { useWishlistStore } from '../../store/wishlistStore';
import { Film } from '../../types/film';

interface WishlistButtonProps {
  film: Film;
  category: 'popular' | 'top_rated' | 'now_playing';
  size?: 'small' | 'medium' | 'large';
}

export const WishlistButton = ({ film, category, size = 'medium' }: WishlistButtonProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(film.id);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(film.id);
    } else {
      addToWishlist(film);
    }
  };

  return (
    <button
      className={`wishlist-btn wishlist-btn--${size} wishlist-btn--${category} ${inWishlist ? 'wishlist-btn--active' : ''}`}
      onClick={handleToggle}
      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      {inWishlist ? '❤️' : '🤍'}
    </button>
  );
};
