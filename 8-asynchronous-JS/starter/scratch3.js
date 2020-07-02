'use-strict'
function wrapper() {
  const getGeo = () => {
    return new Promise((resolve, reject) => {
      let apos = {}
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          apos = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          };
          console.log(apos)
          resolve(apos)
        });
      }
      else {
        // Browser doesn't support Geolocation
        reject(handleLocationError(false));
      }
    }
    )
  }
  const geoFetch = ((local) => {
    return new Promise((resolve, reject) => {
      // console.log(local)
      fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${local.lat},${local.long}`)
        .then(result => result.json()
          .then(final => {
            // console.log(final)
            resolve(final)
          }
          )
        )
    })
  })
  const weatherByWOEID = (id) => {
    return new Promise((resolve, reject) => {
      fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`)
        .then(aWeather => aWeather.json()
          .then(weather => {
            console.log(weather)
            let drise = new Date(weather.sun_rise)
            let dset = new Date(weather.sun_set)
            console.log(`sun rise:\t${drise.toLocaleTimeString()}`)
            console.log(`sun set :\t${dset.toLocaleTimeString()}`)
            let weatherReport = {
              rise: (new Date(weather.sun_rise)).toLocaleTimeString(),
              set: (new Date(weather.sun_set)).toLocaleTimeString(),
              low: ((weather.min_temp) * 9 / 5) + 32,
              high: ((weather.max_temp) * 9 / 5) + 32,
              nowTemp: ((weather.the_temp) * 9 / 5) + 32,
            }
            console.log(weatherReport)
            resolve([weather, weatherReport])
          })
        )
    }
    )
  }

  async function getGeoAW() {
    const geo = await getGeo()
    console.log(geo)
    const fetchLocalArr = await geoFetch(geo)
    console.log(fetchLocalArr)
    let WOEID = fetchLocalArr[0].woeid
    const weather = await weatherByWOEID(WOEID)
    console.log(weather)
  }
  getGeoAW()
}

wrapper();

// distance: 197593
// latt_long: "29.953690,-90.077713"
// location_type: "City"
// title: "New Orleans"
// // woeid: 2458833

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