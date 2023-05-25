/**
 * A function which returns the name of a city by using its ID in the database
 *
 * @param {Number} cityId The ID of the city for which the name is required
 * @param {Array} cities An array which contains all the details of the city
 *
 * @returns {String} The name of the city corresponding to the cityID
 */
export function getCityNameByID(cityId, cities) {
  let cityName = "";
  for (let i = 0; i < cities.length; i++) {
    if (cities[i]._id === cityId) {
      cityName = cities[i].name;
      break;
    }
  }

  return cityName;
}

/**
 * A function which returns the latitude and longitude of a city by using its ID in the database
 *
 * @param {Number} cityId The ID of the city for which the name is required
 * @param {Array} cities An array which contains all the details of the city
 *
 * @returns {Object} The latitude and longitude of the city corresponding to the cityID as an object
 */
export function getCityCoordinatesByID(cityId, cities) {
  let coordinates = {
    latitude: 0.0,
    longitude: 0.0,
  };

  if (!cities) return null
  
  for (let i = 0; i < cities.length; i++) {
    if (cities[i]._id === cityId) {
      coordinates.latitude = cities[i].latitude;
      coordinates.longitude = cities[i].longitude;
      break;
    }
  }

  return coordinates;
}
