console.log('getGeoBrwsr1.js')
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