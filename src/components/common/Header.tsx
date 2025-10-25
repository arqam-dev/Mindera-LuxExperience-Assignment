import { Link, useLocation } from 'react-router-dom';
import { useWishlistStore } from '../../store/wishlistStore';

export const Header = () => {
  const location = useLocation();
  const { films } = useWishlistStore();
  const wishlistCount = films.length;

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1>LuxExperience</h1>
        </Link>
        
        <nav className="header__nav">
          <Link 
            to="/" 
            className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link--active' : ''}`}
          >
            Home
          </Link>
          
          <Link 
            to="/wishlist" 
            className={`header__nav-link ${location.pathname === '/wishlist' ? 'header__nav-link--active' : ''}`}
          >
            Wishlist
            {wishlistCount > 0 && (
              <span className="header__wishlist-count">{wishlistCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};
