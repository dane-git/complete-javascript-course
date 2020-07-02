//module pattern

let budgetController = (function () {
  let x = 23;
  let add = function (a) {
    return x + a;
  }
  //return an object containing a method
  return {
    publicTest: function (b) {
      return (add(b))
    }
  }
})();


let UIController = (function () {
  // some code
})();


let controller = (function (budgetCtrl, UICtrl) {
  let z = (budgetCtrl.publicTest(3))

  return {
    publicTest2: function () {
      console.log(z)
    }
  }

})(budgetController, UIController);