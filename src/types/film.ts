export interface Film {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface FilmCategory {
  id: number;
  name: string;
  films: Film[];
}

export type FilmCategoryType = 'popular' | 'top_rated' | 'now_playing';
