// es5

// const boxes = document.querySelectorAll('.box');

// var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function (cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// })


//#region generator function play: yeild background colors

// color generating function GENERATOR FUNCTION

function* generateColors() {
  yield ['green', 'orange'];
  yield ['blue', 'orange'];
  yield ['orange', 'navy'];
  yield ['navy', 'orange'];
  yield ['navy', 'white'];
  yield ['green', 'orange'];
  yield ['purple', 'gold'];
  yield ['gold', 'purple'];
  yield ['dodgerblue', 'orange'];
  yield ['dodgerblue', 'ghostwhite'];
  yield ['orange', 'navy'];
  yield ['navy', 'orange'];
  yield ['navy', 'white'];

  return
}

let gen = generateColors();

const boxes = document.querySelectorAll('.box');
//transforms nodelist in boxes into an array -> same but modern as line 5
const boxesArr6 = Array.from(boxes);
// ASIDE: ES6 for loop somthing of someArray
for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    console.log('box BLUE!!!')
    continue
  } else if (cur.className.includes('green')) {
    console.log('box GREEN!!!')
  } else {
    console.log(cur.className)
    let [bg, col] = gen.next().value
    cur.style.backgroundColor = bg
    cur.style.color = col;
    cur.textContent = `I am ${col} and ${bg}`
  }
}
//#endregion generator function play: yeild background colors


// using forEach 
// NOTE FYI-forEach doesn't allow continue statement
// boxesArr6.forEach((cur) => {
//   let [bg, col] = gen.next().value
//   cur.style.backgroundColor = bg
//   cur.style.color = col;
//   cur.textContent = `I am ${col} and ${bg}`
// })

// using for of
// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//     console.log('box BLUE!!!')
//     continue
//   } else if (cur.className.includes('green')) {
//     console.log('box GREEN!!!')
//   } else {
//     console.log(cur.className)
//     let [bg, col] = gen.next().value
//     cur.style.backgroundColor = bg
//     cur.style.color = col;
//     cur.textContent = `I am ${col} and ${bg}`
//   }
// }

// //finding elements in an array
// //es5 way
// // find values > 18
// var ages = [12, 17, 8, 21, 14, 11]
// // 1. create a boolean array to determine if each element of array is < 18
// var full = ages.map(function (cur) {
//   console.log('current ' + cur)
//   return cur > 18;
// })
// console.log(full)

// // 2. use indexOf to determine the element we want

// console.log(full.indexOf(true))
// console.log(ages[full.indexOf(true)])


// let ages = [12, 17, 8, 21, 14, 11]
// //es6 way  to find the index 
// // NOTE arr.findIndex(cur, index, arr)
// ages.findIndex(cur => cur >= 18)

// // ES6 find the value 
// // NOTE arr.find(cur, index, arr)
// console.log(ages.find(cur => cur > 17))

// // spread operator
// function addFourAges(a, b, c, d) {
//   return a + b + c + d

// }
// var sum1 = addFourAges(41, 44, 23, 9)
// console.log(sum1)

// var ages = [14, 32, 22, 59]
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2)

// // using the spread operator 
// const sum3 = addFourAges(...ages);
// console.log(sum3)

// // joining arrays with the spread ioperator
// const familySmith = ['john', 'jane', 'jamie'];
// const familyJones = ['ben', 'Sally', 'joseph'];
// const bigFamily = [...familySmith, 'baby', ...familyJones];
// console.log(bigFamily)

// const h = document.querySelector('h1');
// // NOTE querySelectorAll => nodelist, must convert to array to use array methods.
// const theBoxes = document.querySelectorAll('.box');
// // use the spread operator to combine h1 with all boxes
// const all = [h, ...boxes];
// //NOTE convert from nodelist to array -> Array.from()
// Array.from(all).forEach((cur) => {
//   cur.style.color = 'Aquamarine'
// })


// REST PARAMETERS -> opposite of spread operator
// suppost we want to make a function that recieves an arbitrary number of years...

//#region  ES5 function with any number of arguments
//ES5 way of creating a function that takes in any number of arguments
// one way/ easiest way -> 
//  1. define no function with no paraments.
//  2. transfer function propery arguments into array
//    -> Array.prototype.slice.call(arguments)
//  3. loop thru arguments and perform desired action.

function isFullAges5() {
  // arguments is not an array
  console.log(arguments)
  // here we transform arguments with the Array.prototype.slice.call(notArray)
  // transformed here to loop throught with the forEach array method
  // NOTE ES5 hack to transform object into array:
  // NOTE: Array.prototype.slice.call(notArray)
  var args = Array.prototype.slice.call(arguments)
  var d = new Date().getFullYear();
  args.forEach(function (arg) {
    console.log((d - arg) >= 18);
  })
}

isFullAges5(2009, 1991, 1982, 1907)
//#endregion

//#region rest parameters ES6
// as soon as function is called ...year is transformed into an array
function isFullAges6(...years) {
  console.log(years);
  years.forEach(cur => {
    let d = new Date().getFullYear();
    console.log((d - cur) >= 18)
  })
}

isFullAges6(1990, 2005, 2007, 1989, 1985)
//#endregion

//#region  Default paraments

////#endregion  

//#region  new MAPS ES6
// Maps -> new key value base structure in ES6 
// MAPS -> can use any primitive value as keys. 
// -> objects are limited to strings. 

// create a map
const question = new Map();
// add data to map using set method.
// map.set(key, value)
question.set('question', 'What is the official name of the latest major JavaScript version? ');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D ')
question.set(false, 'Wrong, please try again! ')

// to retrieve data use get 
console.log(question.get('question'))

console.log(question)
//get the size of the Map
console.log(question.size)

// // check for certain keys
// question.delete(4);

// if (question.has(4)) {
//   question.delete(4);
// } else {
//   console.log('there is not a 4 key to delete')
// }

// // delete all elements
// question.clear()

// maps are iterable -> can loop through them.

// question.forEach((value, key) => {
//   console.log(`key: ${key}, \nvalue: ${value}`)
// })

// for of loop Map
// question.entries() returns all entries on the question map
// for (let [key, value] of question.entries()) {
//   // use destructuring to access the value 
//   console.log(`key: ${key}, \nvalue: ${value}`)
// }

// using custom data type as a filter on a Map 
for (let [key, value] of question.entries()) {
  if (typeof (key) === 'number') {
    console.log(`Answer: ${key}: ${value}`)
  }
}

// const ans = parseInt(prompt('Write the correct answer number: '))
// // this will return quetsion.true or question.false
// console.log(question.get(ans === question.get('correct')))
// //#endregion maps

//#region Classes

// ES6 Classes = syntatic sugar to make it easier to do prototypal inheritaance and to create objects based on blueprints

// ES5 object bluerpints = function constructors =>
// --> and we added methods to their protype properties in order to make all the instances crea ted thru a function contructor inherit these methods. 

// //ES5
// var Person5 = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person5.prototype.calculateAge = function () {
//   var age = new Date().getFullYear() -
//     this.yearOfBirth;
//   console.log(age);
// }

// var john5 = new Person5('John', 1998, 'teacher')
// console.log(john5);
// console.log(john5.calculateAge())

// now same in modern ES6 
// NOTE: Classes -> all classes must have a constrictor()
//      -> a constructor is where we define the initial properties that we want in our 
//          object. 
//      -> to add a method, also just add it to the class. 
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.age = this.calculateAge();
//   }
//   calculateAge() {
//     let age = new Date().getFullYear() - this.yearOfBirth;
//     return age;
//   }
// }

// let john6 = new Person6('john', 1991, 'student')
// console.log(john6)
// // console.log(john6.calculateAge())
// console.log(john6.name)

//#region  inheritance and Classes and subClasses in ES5

// IN ES5
var Person7 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.age = this.calculateAge();
}
Person7.prototype.calculateAge =
  function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    return (age)
  }

// subclass
var Athlete7 = function (name, yearOfBirth, job, olympicGames, medals) {
  // first call the super class -> Person7
  Person7.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}


// now to set the correct prototype chain, we will use object.create. 
// Object.create() => allows us to manually set the prototype of the object.
Athlete7.prototype = Object.create(Person7.prototype)
// add distinct methods to the subclass
Athlete7.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals)
}


var athlete1 = new Athlete7('john', 1993, 'Spokes Person', 3, 2);

var johnP7 = new Person7('john', 1993, 'Sneaker Designer')
athlete1.wonMedal();

//#endregion inheritance and Classes and subClasses in ES5 END

//#region  inheritance and Classes and subClasses in ES6
// super class -> Person6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.age = this.calculateAge();
  }
  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    return age;
  }
}
// subClass
// NOTE subClass in ES6 => extends keyword:
//    -> class SubClass extends SuperClass
class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
    this.type = this.__proto__.constructor.name;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}
// const sizes = {
//   TINY: 'tiny',
//   SMALL: 'small',
//   NORMAL: 'normal',
//   BIG: 'big',
//   HUGE: 'huge',
// }
const athlete2 = new Athlete6('John', '2001', 'Athlete', 1, 2)


// challenge 
// 2 town elements:
// 1. parks and streets

// buildReport = () => {
//   getParkTreeDensity() {
//     treeDensity = (numOfTrees / parkArea);
//     return treeDensity;
//   }
//   allParksAvgAge() {
//     sumAllParkAges / NumOfParks
//   }
//   lotOfTrees() {
//     return this.trees > 1000
//   }
//   totalLengthTownStreets
//   AvgLengthTownStreests
//   sizeClassificationforEachStreet = [tiny / small / normal / big / huge], if unknown default to nomral
// }