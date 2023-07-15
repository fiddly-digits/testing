import { netflixShows } from '../data/netflix-shows.mjs';

const obj = netflixShows.reduce((obj, show) => {
  obj[show.title] = show.type;
  return obj;
}, {});

console.log('obj: ', obj);
