// Elements HTML

const inputSearch = document.querySelector ('#input-search');
const btnSearch = document.querySelector('.btn-search');
const currentDate = document.querySelector('.current-date');
const currentLocal = document.querySelector('c.urrent-local');
const currentWeather = document.querySelector('.current-weather-status');
const currentTemperature = document.querySelector('.current-temperature');
const windInfo = document.querySelector('#wind-info');
const airHumidityInfo = document.querySelector('#air-humidity-info');
const thermalSensationInfo = document.querySelector('#thermal-sensation-info');
const sunriseInfo = document.querySelector('#sunrise-info');
const sunsetInfo = document.querySelector('#sunset-info');

btnSearch.addEventListener('click', () => {
  let inputValue = inputSearch.value;
  getLocalWeather(inputValue);
});

// Functions

function getLocalWeather(local) {

}




