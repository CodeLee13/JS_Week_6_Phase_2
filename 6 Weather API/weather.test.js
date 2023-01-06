const Weather = require("./weather.js");

describe("Weather", () => {
  it("gets the repo data fetched by the weather client class", () => {
    const mockedClient = {
      fetchWeatherData: (city, callbackFunction) => {
        callbackFunction({
          city: "London",
          weather: "cold",
        });
      },
    };
    const weather = new Weather(mockedClient);
    weather.fetch("London");
    expect(weather.getWeatherData()).toEqual({
      city: "London",
      weather: "cold",
    });
  });
});