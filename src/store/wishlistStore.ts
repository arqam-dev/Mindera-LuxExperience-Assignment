import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Film } from '../types/film';

interface WishlistState {
  films: Film[];
  addToWishlist: (film: Film) => void;
  removeFromWishlist: (filmId: number) => void;
  isInWishlist: (filmId: number) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      films: [],
      
      addToWishlist: (film: Film) => {
        const { films } = get();
        if (!films.find(f => f.id === film.id)) {
          set({ films: [...films, film] });
        }
      },
      
      removeFromWishlist: (filmId: number) => {
        const { films } = get();
        set({ films: films.filter(f => f.id !== filmId) });
      },
      
      isInWishlist: (filmId: number) => {
        const { films } = get();
        return films.some(f => f.id === filmId);
      },
      
      clearWishlist: () => {
        set({ films: [] });
      }
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
