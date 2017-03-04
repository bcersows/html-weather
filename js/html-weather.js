/*
 * Made with <3 by bcersows.
 * Use the variable `weather` to set the weather. Add the class `weather` to the block element which should
 * serve as weather element.
 * version 1.1.0
 */

"use strict";

/**
 * Functions:
 *   setSun
 *   setSnow
 *   setRain
 *   setWind
 *   setClear
 */
const weather = new function() {
  this.setSun = showSun;
  this.setSnow = showSnow;
  this.setRain = showRain;
  this.setWind = showWind;
  this.setClear = showClear;
  
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
  
  function addElements(amount, duration) {
    for ( var i = 0;i<amount;i++ ) {
      $('.weather>.weather-wrapper').append('<div class="weather-element"></div>');
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
    var $weather = $('.weather>.weather-wrapper');
    $weather.removeClass("snow sun rain wind")
      .addClass(weathers[typeId]);
    $weather.children('.weather-element').remove();
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
  
  var $weather = $('.weather');
  if ( $weather.children('.weather-wrapper').length<=0 ) {
    $weather.append('<div class="weather-wrapper"></div>');
  }
  $weather = null;
  return this;
};