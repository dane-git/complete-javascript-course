//Asynchronous javascript

// synchronous JS

// const second = () => {
// console.log('second')
// }
// const first = () => {
// console.log('first');
// second()
// console.log('theEnd')
// }
// first();


// // using asynchronous, simulation using setTimeout
// const second = () => {
//   let d = new Date().getTime()
//   console.log(`second befor setTimeOut(): ${d}`);
//   //setTimeout function pass call back and time
//   setTimeout(() => {
//     console.log('aSync second')
//     d = new Date().getTime()
//     console.log(`second in setTimeout(): ${d}`);
//   }, 2000)
//   let e = new Date().getTime()
//   console.log(`second after setTimeout(): ${e}`);
// }
// const first = () => {
//   let d = new Date().getTime()
//   console.log(`first: ${d}`);
//   second()
//   let e = new Date().getTime()
//   console.log(`theEnd(): ${e}`);
// }
// first();

// // the above code results in console logging :
// // first
// // scratch.js: 22 second
// // scratch.js: 27 theEnd
// // DevTools 

// // scratch.js: 25 first
// // scratch.js: 22 second
// // scratch.js: 27 theEnd
// // scratch.js: 20 aSync second


// Asynchronous withcallbacks ES5

// function getRecipe() {
//   setTimeout(() => {
//     const recID = [20, 50, 32, 9903]
//     console.log(recID)
//     setTimeout((id) => {
//       const recipe = {
//         title: 'Fresh food',
//         publisher: 'some Person'
//       }
//       console.log(`id: ${id}: ${recipe.title}`)
//       // console.log(id)
//     }, 2000, recID[0]);

//   }, 1500);
// }

// getRecipe();

//#region PROMISES ***********************************************
// // PROMISES
// // the () => {}; function in Promise is called an executor -> the function which is immediately called once the promise is created. 
// // executor takes in two arguments , resolve and reject. Both of these are callback functions  
// // if the promise was succesfull resolve is called, else reject is
// const aPromise = new Promise((resolve, reject) => {
//   // lets pretend result is a list of some blogPosts id numbers
//   // result = array of id's
//   let result = [20, 50, 32, 9903];
//   // lets pretend setTimeout() is some function to make an api call.
//   setTimeout(() => {
//     resolve(result)
//   }, 2500);
// });

// // this promise was done as a function so we could pass in recipe ID
// const getRecipe = recID => {
//   return new Promise((resolve, reject) => {
//     // lets pretend that this setTimeout is an api call based on the result of a previous api call. 
//     setTimeout((ID) => {
//       const recipe = { title: 'Great Food', publisher: 'john' }
//       resolve(recipe)
//     }, 5000, recID);
//   });
// }

// const getRelated = publisher => {
//   return new Promise((resolve, reject) => {
//     setTimeout(pub => {
//       const recipe2 = { title: 'Greatest Food', publisher: 'john' }
//       resolve(recipe2)
//     }, 5500, publisher)

//   })
// }
// // to consume the Promise method use two methods provided with promises.
// // the then method allows us to add an event handler in the case that the promise was fulfilled. -> a callback Fx
// aPromise
//   .then(IDs => {
//     console.log('console.log in aPromise .then(IDs)')
//     console.log(IDs)
//     console.log('')
//     return getRecipe(IDs[1])
//   })
//   .then(recipe => {
//     console.log('console.log in .then(recipe => {}')
//     console.log(recipe)
//     console.log('')
//     return getRelated(recipe.publisher);
//   })
//   .then(related => {
//     console.log('console.log in .then(related => {}')
//     console.log(`related: ${related.title}`)
//     console.log('')
//   })
//   .catch(error => {
//     console.log(error)
//   });


// // ASYNC AWAIT changes the way we consume promises. 
// // async function keeps running in background.  and then returns a promise.
// // inside an async function we can have one or more await epxressions, in order to consume promise
// // NOTE async function auotmatically return a promise
// // ->    and so if we return a value from the async function using the return keyword, then the promise will automatically be resolved with the prescribed return value.
// async function getRecipesAW() {
//   // IDS will hold the resolve or reject of the promise
//   const IDs = await aPromise;
//   console.log(IDs)
//   const recipe = await getRecipe(IDs[1])
//   console.log(recipe)
//   const related = await getRelated(recipe.publisher)
//   console.log(related)

//   return recipe
// }
// // use the then method to access the return of the async function 
// // .then(theResultValueOfThePromise)
// getRecipesAW()
//   .then((asyncReturn) => {
//     console.log('')
//     console.log('asyncReturn')
//     console.log(asyncReturn)
//   });

//#endregion PROMISES

//#region AJAX-API
// AJAX = Asynchronous Javascript And XML
// API = Application Program Interface
//
//AJAX call using fetch
// fetch -> asynchronous network requests
// fetch(urlWhereApiIsLocated)
// fetch(`https://crossorigin.mehttps://www.metaweather.com/api/location/search/?lattlong=30.633250,%20-88.176041`);

// NOTE // the above fetch will result in the following error:
// asynchronous.html: 1 Access to fetch at 'https://www.metaweather.com/api/location/search/?lattlong=30.633250,%20-88.176041' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.If an opaque response serves your needs, set the request's mode to 'no - cors' to fetch the resource with CORS disabled.
// www.metaweather.com / api / location / search /? lattlong = 30.633250,% 20 - 88.176041: 1 Failed to load resource: net:: ERR_FAILED
// NOTE Same origin policy in Javascript - prevents us from making ajax request from a domain different than our own domain.
// In order to allow developers to actually make requests across domains, CORS - Cross-Origin-Resource-Sharing - was developed.
// THE above errro indicates that the developeres who host the api have not implemented CORS, so in order to get around this we will PROXY or channel the request through our own server.  
// --> this is done by doing the ajax request on our own server (we the same origin policy doesnt exist) and then send the data to teh browser.
// In order to avoid creating our own server, we will use a service that does this for us.  = (proxy) => https://cors-anywhere.herokuapp.com



// distance: 197473
// latt_long: "29.953690,-90.077713"
// location_type: "City"
// title: "New Orleans"
// woeid: 2458833

const checkDataLocation = data => {
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
