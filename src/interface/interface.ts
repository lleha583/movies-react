export interface IState {
  year: string;
  search: string;
  type: string;
  page: number;
  url: string;
  lastStatus: string;
}

export interface IFilm {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: string | string[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: "movie" | "series";
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}

export interface IListFilm {
  Title: string;
  Year?: string;
  imdbID: string;
  Type?: "movie" | "series";
  Poster?: string;
}
