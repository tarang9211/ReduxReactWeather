const API_KEY = '80e5a7ee98624a55d93b95ad4bf394f4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url =`${ROOT_URL}&q=${city},us`;
  
  return {
    type: FETCH_WEATHER,

  }
}
