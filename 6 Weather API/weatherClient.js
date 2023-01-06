const { get } = require("callback-fetch");
const apiKey = require("./apiKey.js");

class WeatherClient {
  fetchWeatherData(city, callbackFunction) {
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    get(url, (retrievedData) => {
      const object = JSON.parse(retrievedData);
      return callbackFunction(object);
    });
  }
}

module.exports = WeatherClient;