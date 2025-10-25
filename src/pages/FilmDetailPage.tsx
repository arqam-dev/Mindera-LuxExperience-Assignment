import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { tmdbService } from '../services/tmdb';
import { FilmDetail } from '../components/film/FilmDetail';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

export const FilmDetailPage = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const navigate = useNavigate();
  
  const { data: film, isLoading, error } = useQuery({
    queryKey: ['film', id],
    queryFn: () => tmdbService.getFilmById(Number(id)),
    enabled: !!id,
  });

  if (isLoading) return <LoadingSpinner />;
  if (error || !film) return <div>Film not found</div>;

  const validCategory = (category as 'popular' | 'top_rated' | 'now_playing') || 'popular';

  return (
    <div className="film-detail-page">
      <button 
        className="film-detail-page__back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      
      <FilmDetail film={film} category={validCategory} />
    </div>
  );
};
