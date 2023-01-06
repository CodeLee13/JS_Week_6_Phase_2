const WeatherClient = require("./weatherClient.js");
const Weather = require("./weather.js");

describe("integration", () => {
  it("gets the repo data fetched by the weather client class", async () => {
    const weather = new Weather(new WeatherClient());
    await weather.fetch("London");
    const data = weather.getWeatherData()
    expect(data.coord).toEqual({"lat": 51.5085, "lon": -0.1257});
  });
});

