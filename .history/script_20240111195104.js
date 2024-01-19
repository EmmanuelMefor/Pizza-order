// Global variables
var crust = document.getElementById("crust");

var sauce = document.getElementById("sauce");

let toppings = [];

// toppings array

// event listener
var formButton = document.getElementById("btn");
formButton.addEventListener("click", function calculateTotal(toppings) {
  event.preventDefault();

  let topping1 = document.getElementById("Topping1").value;
  let topping2 = document.getElementById("Topping2").value;
  let topping3 = document.getElementById("Topping3").value;

  toppings.push(topping1, topping2, topping3);

  calculateTotal(toppings);
});

function calculateTotal(toppingArray) {
  let total = 0;
  let toppingCost = 2.5;
  let baseCost = 5.5; // cost of crust and sauce

  // order string concatenation

  let orderString = `${crust.value} pizza with ${sauce.value}`;
  let toppingString = "Toppings: ";

  for (var i = 0; i < toppingArray.length; i++) {
    if (toppingArray[i] !== "") {
      // For Loop
      total = total + toppingCost;
      toppingString = toppingString + toppings[i] + " ";
    }
  }
  // total = baseCost + cost of all toppings
  total = total + baseCost;

  // set DOM total += total
  document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
  // use DOM: = orderString
  document.getElementById("pizzaOrder").innerHTML = orderString;
  // use DOM: = toppingString
  document.getElementById("toppings").innerHTML = toppingString;
}
