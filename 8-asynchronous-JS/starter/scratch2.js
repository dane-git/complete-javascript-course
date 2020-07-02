// get long lat
function checkDataLocation(data) {
  if (Array.isArray(data)) {
    console.log(data[0]);
    if ('distance' in data[0]) {
      let nearestData = data[0];
      console.log(nearestData.distance)
      let nearestCity = {
        meters: nearestData.distance,
        miles: (nearestData.distance / 1609.344),
        woeid: nearestData.woeid,
        name: nearestData.title,
      }
      return fetchByWOEID(nearestCity)
    } else {
      nearestCity = 'notFound'
      return nearestCity
    }
  } else {
    return data
  }
}
const fetchByWOEID = (object) => {
  if ('woeid' in object) {
    let apiWOEID = object.woeid
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${apiWOEID}/`)
      .then(apiWOEIDcall => apiWOEIDcall.json()
        .then(apiResult => {
          bigObj = [object, apiResult]
          console.log(bigObj)
          return (bigObj)
        })
      )
  }
}
async function checkGeo() {
  let aSPOT = {}
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position, pos) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(pos)
      checkDataLocation(pos)
      return pos
    });
  }
  else {
    // Browser doesn't support Geolocation
    handleLocationError(false);
  }
  return aSPOT;
}

function handleLocationError() {

  console.log(`Error: The Geolocation service failed.`);
  console.log('Error: Your browser doesn\'t support geolocation.');
}


async function getLocalWeather() {
  checkGeo()
    .then((pos) => {
      console.log(pos)
    }
    )
}
getLocalWeather()

fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=30.633250,%20-88.176041`)
  .then(result => {
    console.log(result); // this is a readable stream
    // the readable stream must be converted from json to js using JSON method => JSON method returns a promise
    // we must return the result of this 
    return result.json();
  })
  .then((data) => {
    console.log(data);
    let dataCheck = checkDataLocation(data)
    if (dataCheck != 'notFound') {
      console.log('Found something...')
      console.log(dataCheck)

      return dataCheck;
    } else return dataCheck
  }).then((weather) => {
    let position
    console.log(weather)
    if (Array.isArray(weather)) {
      position = weather[0];
      weather = weather[1]
    }
    if (position) {
      console.log('It looks like we had trouble finding data for your exact location')
      console.log(`This data is bassed out of ${position.name} and is approximately ${position.miles} miles away from you.`)
    }
    return weather
  })
  .catch(error => console.log(error))