import { useFilms } from './hooks/useFilms';
import { Carousel } from './components/carousel/Carousel';
import { LoadingSpinner } from './components/common/LoadingSpinner';

const hasApiKey = import.meta.env.VITE_TMDB_API_KEY && import.meta.env.VITE_TMDB_API_KEY !== 'demo_key';

function App() {
  const { data: popularFilms, isLoading: popularLoading, error: popularError } = useFilms('popular');
  const { data: topRatedFilms, isLoading: topRatedLoading, error: topRatedError } = useFilms('top_rated');
  const { data: nowPlayingFilms, isLoading: nowPlayingLoading, error: nowPlayingError } = useFilms('now_playing');

  if (popularLoading || topRatedLoading || nowPlayingLoading) return <LoadingSpinner />;
  if (popularError || topRatedError || nowPlayingError) return <div>Error loading films</div>;

  return (
    <div className="App">
      <header className="app-header">
        <h1>LuxExperience Mindera Assignment</h1>
        <p>Film Browsing Application</p>
        
        {!hasApiKey && (
          <div className="demo-notice">
            <p>🎬 Demo Mode: Using mock data (no API key required)</p>
          </div>
        )}
      </header>
      
      <main className="app-main">
        <Carousel title="Popular Films" films={popularFilms || []} category="popular" />
        <Carousel title="Top Rated Films" films={topRatedFilms || []} category="top_rated" />
        <Carousel title="Now Playing Films" films={nowPlayingFilms || []} category="now_playing" />
      </main>
    </div>
  )
}

export default App