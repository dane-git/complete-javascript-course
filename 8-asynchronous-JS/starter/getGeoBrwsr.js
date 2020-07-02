const geoCoords = new Promise((resolve, reject) => {

  function getCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showcoordinates);
    } else {
      console.log("The browser doesn't support Geolocation.");
    }
  }

  function showcoordinates(myposition) {
    let long = myposition.coords.longitude;
    let lat = myposition.coords.latitude

    let coords = {
      long: long,
      lat: lat
    }
    resolve(coords)
  }

  getCoordinates()
});

geoCoords
  .then(result => {
    console.log(result)
    return (result)
  })
  .then(returned => {
    console.log(returned)
  })

  // Object
// consolidated_weather: Array(6)
// 0:
// air_pressure: 1016
// applicable_date: "2020-07-01"
// created: "2020-07-01T19:24:46.256336Z"
// humidity: 70
// id: 6389715521503232
// max_temp: 34.175
// min_temp: 26.72
// predictability: 75
// the_temp: 31.46
// visibility: 10.126175634295713
// weather_state_abbr: "lr"
// weather_state_name: "Light Rain"
// wind_direction: 254.9287989465205
// wind_direction_compass: "WSW"
// wind_speed: 4.2081193361064715


// consolidated_weather: (6)[{ … }, { … }, { … }, { … }, { … }, { … }]
// latt_long: "29.953690,-90.077713"
// location_type: "City"
// parent: { title: "Louisiana", location_type: "Region / State / Province", woeid: 2347577, latt_long: "30.974199,-91.523819" }
// sources: (6)[{ … }, { … }, { … }, { … }, { … }, { … }]
// sun_rise: "2020-07-02T06:03:34.324135-05:00"
// sun_set: "2020-07-02T20:05:22.593066-05:00"
// time: "2020-07-02T06:41:09.592384-05:00"
// timezone: "America/Chicago"
// timezone_name: "LMT"
// title: "New Orleans"
// woeid: 2458833