import { netflixShows } from '../data/netflix-shows.mjs';

const res = netflixShows.map((show) => {
  return `${show.title} : ${show.type}`;
});

console.log('res: ', res);
