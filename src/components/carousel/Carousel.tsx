import { useState, useRef } from 'react';
import { Film } from '../../types/film';
import { FilmCard } from '../film/FilmCard';

interface CarouselProps {
  title: string;
  films: Film[];
  category: 'popular' | 'top_rated' | 'now_playing';
}

export const Carousel = ({ title, films, category }: CarouselProps) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Width of one item + gap
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className={`carousel carousel--${category}`}>
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-wrapper">
        <button 
          className={`carousel-btn carousel-btn--left ${!canScrollLeft ? 'carousel-btn--disabled' : ''}`}
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          ‹
        </button>
        
        <div 
          className="carousel-container"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          <div className="carousel-track">
            {films.map(film => (
              <div key={film.id} className="carousel-item">
                <FilmCard film={film} category={category} />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className={`carousel-btn carousel-btn--right ${!canScrollRight ? 'carousel-btn--disabled' : ''}`}
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </div>
  );
};
