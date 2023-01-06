const WeatherClient = require("./weatherClient.js");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Weather {
  constructor(client) {
    this.client = client;
    this.data = null;
  }

  fetch(city) {
    return new Promise((resolve, reject) => {
      this.client.fetchWeatherData(city, (body) => {
        this.data = body;
        resolve(body);
      });
    });
  }

  getWeatherData() {
    return this.data;
  }

  displayWeather() {
    console.log(`City: ${this.data.name}`);
    console.log(`Weather: ${this.data.weather[0].main}`);
    console.log(`Temperature: ${Math.round(this.data.main.temp)}\u00B0C`);
    console.log(`Feels like: ${Math.round(this.data.main.feels_like)}\u00B0C`);
    console.log(`Humidity: ${this.data.main.humidity}%`);
  }

  userInput() {
    rl.question(
      "\nWhat city would you like to see the weather for? Type done when you would like to exit the program\n",
      (input) => {
        this.fetch(input).then(() => {
          if (input === "done") {
            rl.close();
          } else {
            this.displayWeather();
            this.userInput();
          }
        });
      }
    );
  }
}
module.exports = Weather;

const weather = new Weather(new WeatherClient());
weather.userInput();