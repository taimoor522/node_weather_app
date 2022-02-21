const axios = require("axios").default;

const api_key = "150e1f904ffc6f8fbccb17e44bc6e76f";

function getWeather(location) {
  axios.get(
    `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${api_key}`
  );
}
