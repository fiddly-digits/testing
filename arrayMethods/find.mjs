import { netflixShows } from '../data/netflix-shows.mjs';

const movie = netflixShows.find(
  (show) => show.type === 'Movie' && show.release_year > 2020
);

console.log('movies: ', movie);
