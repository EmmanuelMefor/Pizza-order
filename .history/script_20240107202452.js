// Global variables
var crust = document.getElementByinnerHTML("crust");

var sauce = document.getElementByinnerHTMl("sauce");

// toppings array
var topping = [
  "chicken",
  "Pepperoni",
  "Cheese",
  "Mushrooms",
  "BabySpinach",
  "Olives",
];
for (var i = 0; i < topping.length; i++)
  // event listener
  var formButton = document.getElementById("btn");
Btn.addEventListener("click", function calculateTotal(toppings) {
  event.preventDefault();

  var topping1 = document.getElementById("Topping1").value;
  //   var topping 2 = document.getElementById ("Topping2").value;
  //   var topping 3 = document.getElementById ("Topping3").value;
});

function calculateTotal(toppings) {
  let total = 0;
  let toppingCost = 2.5;
  let baseCost = 5.5; // cost of crust and sauce

  // order string concatenation

  let orderString = crust + sauce[i];

  let toppingString = "Toppings: ";

  // For Loop
  total = total + toppingCost;
  toppingString = toppingString + toppingArray[i];

  // total = baseCost + cost of all toppings
  total = total + baseCost;

  // set DOM total += total
  document.getElementById("total" + "$").innerHTML = total;
  // use DOM: = orderString
  document.getElementById("pizzaOrders").innerHTML = order;
  // use DOM: = toppingString
  document.getElementById("toppings").innerHTML = toppings;
}
