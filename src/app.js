/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
});

card.show();

var ajax = require('ajax');
var cityName = 'Ottawa';
var APIKey = '97692c122eeef23af09f5b13ca4ce544';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey;

ajax(
  {
    url:URL,
    type:'json'
  },
  function(data){
    console.log('Successfully fetched weather data!');
    console.log(JSON.stringify(data));
    var location = data.name;
    var tempature = Math.round(data.main.temp-273.15) + 'C';
    
    var description = data.weather[0].description;
    description = description.charAt(0).toUpperCase()+description.substring(1);
    card.subtitle(location+ ', '+tempature);
    card.body(description);
  },
  function(error){
  console.og('Failed fetching weather data: '+ error);
  }
);