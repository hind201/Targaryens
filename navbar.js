// JavaScript Document
function myFunction() {
  var x = document.getElementById("myNav");

  if (x.className === "nav_link_container") {
    x.className += " respNav";
  } else {
    x.className = "nav_link_container";
  }
}