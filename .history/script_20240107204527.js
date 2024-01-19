// Global variables
var crust = document.getElementByinnerHTML("crust");

var sauce = document.getElementByinnerHTMl("sauce");

// toppings array
var toppings = [calculateTotal()];
for (var i = 0; i < topping.length; i++)
  // event listener
  var formButton = document.getElementById("btn");
Btn.addEventListener("click", function calculateTotal(toppings) {
  event.preventDefault();

  let topping1 = document.getElementById("Topping1").value;
  let topping2 = document.getElementById("Topping2").value;
  let topping3 = document.getElementById("Topping3").value;

  toppings.push(topping1);
  toppings.push(topping2);
  toppings.push(topping3);
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
