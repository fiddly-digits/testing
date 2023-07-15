import { netflixShows } from '../data/netflix-shows.mjs';

let movies = netflixShows.filter((show) => show.type === 'Movie');

console.log(movies);
