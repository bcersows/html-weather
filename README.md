# html-weather
Small and simple weather overlay using (mostly) CSS.

## Demo
Check it out [here](http://codepen.io/bcersows/full/vgLEEg).

## Usage
To use it, simply import the JS and CSS files from the dist folder.

```
<link href="bower_components/html-weather/dist/css/html-weather.min.css" rel="stylesheet" type="text/css"/>
<script src="bower_components/html-weather/dist/js/html-weather.min.js" type="text/javascript"></script>
```

A global variable called `weather` will be created, which can be used for
controlling the weather. For that use one of the following functions:

* **setClear**: Removes all weather effects
* **setSun**: Some sunbeams
* **setSnow**: Snowflakes for the winter feeling
* **setRain**: Darn autumn

e.g.: `weather.setSnow();`

The effects will be displayed in all elements with a class `weather`.  
Those should be block elements and of `position: relative` or `absolute`.