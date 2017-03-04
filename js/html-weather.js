/*
 * Made with <3 by bcersows.
 * Use the variable `weather` to set the weather. Add the class `weather` to the block element which should
 * serve as weather element.
 * version 1.1.0
 */

"use strict";

/**
 * The control object for setting the weather.
 * Functions:
 *   setSun
 *   setSnow
 *   setRain
 *   setWind
 *   setClear
 */
const weather = new function() {
  /**
   * Set a sunny weather.
   */
  this.setSun = showSun;
  /**
   * Let snowflakes float down.
   */
  this.setSnow = showSnow;
  /**
   * A cuddly rainy weather.
   */
  this.setRain = showRain;
  /**
   * Wind's howling outside.
   */
  this.setWind = showWind;
  /**
   * Clear all weather effects.
   */
  this.setClear = showClear;
  
  var initializedWeatherAreas;
  
  var interval;
  var intervalCounter;
  var intervalMax;
  
  const weathers = [
    "none",
    "sun",
    "snow",
    "rain",
    "wind"
  ];
  
  window.onbeforeunload = closingCode;
  function closingCode(){
    // do something...
    console.log("lala");
    return null;
  }
  
  function addElements(amount, duration) {
    for ( var i = 0;i<amount;i++ ) {
      var div = document.createElement("div");
      div.innerHTML = '<div class="weather-element"></div>';
      Array.prototype.forEach.call(initializedWeatherAreas, function(weatherWrapper, i){
        weatherWrapper.appendChild( div.firstChild );
      });
      div = null;
    }
    if ( intervalCounter >= intervalMax ) {
      clearInterval(interval);
      interval = null;
    }
    intervalCounter++;
  }
  
  function showClear() {
    setWeather(0);
  }
  
  function showRain() {
    setWeather(3);
    setWeatherInterval(10, 1, 5);
  }
  
  function showSnow() {
    setWeather(2);
    setWeatherInterval(10, 1, 10);
  }
  
  function showSun() {
    setWeather(1);
    setWeatherInterval(10, 1, 1);
  }
  
  function showWind() {
    setWeather(4);
    setWeatherInterval(10, 1, 1);
  }
  
  function setWeather(typeId) {    
    // Reset the current weather.
    Array.prototype.forEach.call(initializedWeatherAreas, function(weatherWrapper, i){
      weatherWrapper.classList.remove("rain", "snow", "sun", "wind");
      weatherWrapper.classList.add(weathers[typeId]);
      
      // Remove existing weather elements.
      var children = weatherWrapper.children;
      Array.prototype.forEach.call(children, function(child, i){
        if ( child.classList.contains("weather-element") ) {
          child.parentNode.removeChild(child);
        }
      });
    });
  }
  
  function setWeatherInterval(elementCount, delay, maxDuration) {
    intervalCounter = 0;
    intervalMax = maxDuration;
    
    if ( interval ) {
      clearInterval(interval);
    }
    interval = setInterval(function() {
      addElements(elementCount, maxDuration);
    }, delay*1000);
  }
  
  /**
   * Initialize the existing weather containers.
   */
  function initialize() {
    initializedWeatherAreas = [];
    var weathers = document.querySelectorAll('.weather');
    
    // Iterate through all weather containers and add the .weather-wrapper,
    //  if necessary.
    Array.prototype.forEach.call(weathers, function(weather, i){
        var wrapper = weather.querySelector('.weather-wrapper');
        if ( wrapper === null ) {
          var wrapper = document.createElement("div");
          wrapper.className = "weather-wrapper";
          weather.appendChild( wrapper );
        }
        initializedWeatherAreas.push(wrapper);
        wrapper = null;
    });
    
    weathers = null;
  };
  
  initialize();
  
  return this;
};