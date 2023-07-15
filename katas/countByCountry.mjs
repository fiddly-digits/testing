export default function countByCountry(artistAndCountriesList) {
  return artistAndCountriesList.reduce((obj, registry) => {
    registry.country in obj
      ? obj[registry.country]++
      : (obj[registry.country] = 1);
    return obj;
  }, {});
}
