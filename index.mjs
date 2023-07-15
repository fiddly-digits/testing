import iva from './katas/iva.mjs';
import removeVowels from './katas/removeVowels.mjs';
import countByCountry from './katas/countByCountry.mjs';
import { artistMostListenedCountries } from './data/artistMostListenedCountries.mjs';

const result = iva(1);
const noVowels = removeVowels('javascript');
const countries = countByCountry(artistMostListenedCountries);

console.log('El iva es: ', result);
console.log('No vowels javascript ->', noVowels);
console.log(countries);
