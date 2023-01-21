function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let feelElement = document.querySelector("#feel");
  let dateElement = document.querySelector("#time");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  feelElement.innerHTML = Math.round(response.data.temperature.feels_like);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = "6d2f7310aaa7a0o47bf2b04d763t6f29";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New_York&key=6d2f7310aaa7a0o47bf2b04d763t6f29&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
