function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let day_night = "AM";
  if (hours > 12) {
    day_night = "PM";
    hours = hours - 12;
  } else if (hours == 0) {
    hours == 12;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = date.getDay();
  return `${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let feelElement = document.querySelector("#feel");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  feelElement.innerHTML = Math.round(response.data.temperature.feels_like);
}

let apiKey = "6d2f7310aaa7a0o47bf2b04d763t6f29";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New_York&key=6d2f7310aaa7a0o47bf2b04d763t6f29&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
