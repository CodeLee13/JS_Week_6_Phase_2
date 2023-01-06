const { get } = require("callback-fetch");

get("https://api.github.com/repos/sinatra/sinatra", (responseText) => {
  console.log(JSON.parse(responseText));
});