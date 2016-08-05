// CHARLOTTE
// Lat: 35.2270870;
// Lng: -80.8431270

var url = "https://api.forecast.io/forecast/586b30bea981e4eda9755e1c9ab7e739/";
var lat = 0;
var lon = 0;
var fahr = false;

function getWeather() {
  $.ajax({
    url: url + lat + ',' + lon,
    dataType: "jsonp",
    success: function(data) {
      // use jsonp to get values of current temp and icon and load them into respective functions for processing.
      // update temp
      var fTemp = data.currently.apparentTemperature;
      tempToggler(fTemp);

      // update icon
      var wIcon = data.currently.icon;
      updateIcon(wIcon);
    }
  });
};

//get location
function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    convertLatLong(lat, lng);
  });
}

// convert Latitude and Longitude to
// readable location
function convertLatLong(lat, lng) {
  var geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({
    'latLng': latlng
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      $("#loc").html("<span id='loc'>" + results[2].formatted_address + "</span>");
    } else {
      alert("No results found");
    }
  });
}

// function to toggle between Fahrenheit and Celsius
function tempToggler(fTemp) {
  var fahrTemp = Math.round(fTemp);
  var celTemp = Math.round((fahrTemp - 32) * 5 / 9);

  function toggler(fahrTemp, celTemp) {
    if (fahr === true) {
      $("#temp").html("<span id='temp'>" + celTemp + "</span>");
      $("#f-c").html("<i id='f-c' class='wi wi-celsius'></i>");
      fahr = false;
    } else {
      $("#temp").html("<span id='temp'>" + fahrTemp + "</span>")
      $("#f-c").html("<i id='f-c' class='wi wi-fahrenheit'></i>")
      fahr = true;
    }
  }
  toggler(fahrTemp, celTemp);

  $("#f-c").on("click", function() {
    toggler(fahrTemp, celTemp);
  });

}

function updateIcon(wIcon) {
  switch (wIcon) {
    case 'clear-day':
      $("#icn").html("<i id='icn' class='wi wi-day-sunny'></i>");
      $("#icn-words").html("<span id='icn-words'>" + wIcon + "</span>");
      break;
    case 'clear-night':
      $("#icn").html("<i id='icn' class='wi wi-night-clear'></i>");
      $("#icn-words").html("<span id='icn-words'>" + wIcon + "</span>");
      break;
    case 'rain':
      $("#icn").html("<i id='icn' class='wi wi-rain'></i>");
      $("#icn-words").html("<span id='icn-words'>" + wIcon + "</span>");
      break;
    case 'sleet':
      $("#icn").html("<i id='icn' class='wi wi-sleet'></i>");
      $("#icn-words").html("<span id='icn-words'>" + wIcon + "</span>");
      break;
    case 'win':
      $("#icn").html("<i id='icn' class='wi wi-strong-wind'></i>");
      $("#icn-words").html("<span id='icn-words'>" + wIcon + "</span>");
      break;
    case 'fog':
      $("#icn").html("<i id='icn' class='wi wi-fog'></i>");
      $("#icn-words").html("<span id='icn-words'>" + wIcon + "</span>");
      break;
    case 'cloudy':
      $("#icn").html("<i id='icn' class='wi wi-cloudy'></i>");
      $("#icn-words").html("<span id='icn-words'>" + wIcon + "</span>");
      break;
    case 'partly-cloudy-day':
      $("#icn").html("<i id='icn' class='wi wi-day-cloudy'></i>");
      $("#icn-words").html("<span id='icn-words'>" + wIcon + "</span>");
      break;
    case 'partly-cloudy-night':
      $("#icn").html("<i id='icn' class='wi wi-night-alt-cloudy'></i>");
      $("#icn-words").html("<span id='icn-words'>" + wIcon + "</span>");
      break;
    default:
      $("#icn").html("<i id='icn' class='wi wi-na'></i>");
      $("#icn-words").html("<span id='icn-words'>N/A</span>");
  }
}

function init() {
  getLocation();
  getWeather();
}

init();
