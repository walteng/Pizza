// BI LOGIC


function getPizza() {
  var p = document.getElementById("pa");
  var x = document.getElementById("size").selectedIndex;
  var y = document.getElementById("crust").selectedIndex;
  var z = document.getElementById("topping").selectedIndex;
  p.innerHTML = parseFloat(document.getElementsByTagName("option")[x].value) + parseFloat(document.getElementsByTagName("option")[y].value) + parseFloat(document.getElementsByTagName("option")[z].value)
}



// UI LOGIC
