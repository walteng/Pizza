// BI LOGIC

//
// function getPizza() {
//   var p = document.getElementById("pa");
//   var x = document.getElementById("size").selectedIndex;
//   var y = document.getElementById("crust").selectedIndex;
//   var z = document.getElementById("topping").selectedIndex;
//   p.innerHTML = parseFloat(document.getElementsByTagName("option")[x].value) + parseFloat(document.getElementsByTagName("option")[y].value) + parseFloat(document.getElementsByTagName("option")[z].value)
// }
var finalOrderCost = [];

function Order(size, crust, topping) {
  this.customSize = size;
  this.customCrust = crust;
  this.customTopping = topping;
  this.customPlace = location;
  this.pizzaPrice = 0;
}


var selectSize = ["Small", "Medium", "Large"];
var selectCrust = ["Crispy", "Stuffed", "Gluten-free"];
var selectTopping = ["Bacon", "Chicken", "Beef", "Vegetables"];
var selectLocation = ["Westlands", "Ngong Rd", "Karen"];

Order.prototype.pizzaCost = function() {
  if (this.customSize === selectSize[1]) {
    this.pizzaPrice += 1500;
  } else if (this.customSize === selectSize[2]) {
    this.pizzaPrice += 1000;
  } else if (this.customSize === selectSize[3]) {
    this.pizzaPrice += 700;
  }
  if (this.customCrust === selectCrust[1]) {
    this.pizzaPrice += 250;
  } else if (this.customCrust === selectCrust[2]) {
    this.pizzaPrice += 150;
  } else if (this.customCrust === selectCrust[3]) {
    this.pizzaPrice += 100;
  }
  if (this.customTopping === selectTopping[1]) {
    this.pizzaPrice += 400;
  } else if (this.customTopping === selectTopping[2]) {
    this.pizzaPrice += 300;
  } else if (this.customTopping === selectTopping[3]) {
    this.pizzaPrice += 200;
  }
  if (this.customPlace === selectLocation[1]) {
    this.pizzaPrice += 150;
  } else if (this.customPlace === selectLocation[2]) {
    this.pizzaPrice += 200;
  } else if (this.customPlace === selectLocation[3]) {
    this.pizzaPrice += 300;
  }

  return this.pizzaPrice;
}



Order.prototype.finalCost = function() {
  var cartTotal = 0;
  for (var order = 0; order < finalOrderCost.length; order++) {
    cartTotal += finalOrderCost[order];
  }
  return cartTotal;
}

// UI LOGIC


$(document).ready(function() {
  $(".Cost").click(function(event) {
    event.preventDefault();
    var custom1Size = $("select#size").val();
    var custom1Crust = $("select#crust").val();
    var custom1Topping = $("select#topping").val();
    var custom1Place = $("select#location").val();
    var newCustomer = new Order(custom1Size, custom1Crust, custom1Topping, custom1Place);
    var pizzaCost = parseInt(custom1Size) + parseInt(custom1Crust) + parseInt(custom1Topping) + parseInt(custom1Place);
    finalOrderCost.push(newCustomer.pizzaPrice);
    $("#p").text("Pizza :" + " " + custom1Size);
    $("#pa").text("Crust :" + " " + custom1Crust);
    $("#paa").text("Topping :" + " " + custom1Topping);
    $("#par").text("Delivery :" + " " + custom1Place);
    $("#paaa").text("Total :" + " " + pizzaCost);
    $(".deli").click(function(event) {
      alert("Your will be delivered to your place "+"at  "+pizzaCost+". Thank you for shopping with us.")
    });
  });

});
