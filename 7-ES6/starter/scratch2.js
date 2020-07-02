// challenge 
// 2 town elements:
// 1. parks and streets
// small town: 
//parkTotal =3
// streets = 4
//[name, buildYear]
console.log("script2")
var assetCount = 0;
let assets = []
class Asset {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
    this.age = new Date().getFullYear() - this.buildYear;
    this.id = assetCount;

    assetCount++;
    this.pushAsset()

  }

  pushAsset() {
    assets.push(this)
  }
}

class Park extends Asset {
  constructor(name, buildYear, area, numOfTrees) {
    super(name, buildYear);
    this.area = area;
    this.numOfTrees = numOfTrees;
    this.treeDensity = this.getTreeDensity();
    this.type = this.__proto__.constructor.name;
  }

  getTreeDensity() {
    let density = this.numOfTrees / this.area
    return density
  }

}
// tiny / small / normal / big / huge]
class Street extends Asset {
  constructor(name, buildYear, length, size = 'NORMAL') {
    super(name, buildYear)
    this.length = length
    this.size = size;
    this.type = this.__proto__.constructor.name;

  }


}

function buildReport(assets) {
  let totalStreetLen = 0;
  let totalStreets = 0;
  let avgStreet = 0;
  let lotOfTreesParks = 0;
  let totalParks = 0;

  assets.forEach(function (asset) {
    if (asset.type === 'Street') {
      totalStreets++
      totalStreetLen += asset.length
    } else if (asset.type === 'Park') {
      totalParks++
      if (asset.numOfTrees >= 1000) {
        lotOfTreesParks++;

      }
    }
  })
  report = {
    streetsLength: totalStreetLen,
    totalStreets: totalStreets,
    avgStreet: totalStreetLen / totalStreets,
    lotOfTreesParks: lotOfTreesParks,
    totalParks: totalParks,
  }
  return report;
}

let park1 = new Park('silver Lake', 1999, 15000, 300)
let street1 = new Street('Long Street', 2005, 5999, 'tiny')
let street2 = new Street('Short Street', 2010, 15999, 'small')
let park2 = new Park('Gold Lake', 1970, 12000, 1200)
let street3 = new Street('Longest Street', 2005, 60999, 'big')
let park3 = new Park('Platnum Lake', 1999, 45000, 1001)
let street4 = new Street('Normal Street', 2005, 5999)

buildReport(assets)




// allParks = [];
// allStreets = [];
// allAssets =

// add streets 


// add parks





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