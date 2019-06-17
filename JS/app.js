$(document).ready(function(){
  $(".delv").click(function(){
    $(".input").toggle();
  });
});
function myFunction() {
  var x = document.getElementById("size").selectedIndex;
  var y = document.getElementById("crust").selectedIndex;
  var z = document.getElementById("topping").selectedIndex;
  parseFloat(document.getElementById("price").value)= (parseFloat(document.getElementsByTagName("option")[x].value)+ parseFloat(document.getElementsByTagName("option")[y].value) + parseFloat(document.getElementsByTagName("option")[z].value ));
}
