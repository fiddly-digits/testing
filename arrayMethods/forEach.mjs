import { netflixShows } from '../data/netflix-shows.mjs';

export default function foreach() {
  netflixShows.forEach((show) => {
    console.log('title: ', show.title);
  });
}

foreach();
