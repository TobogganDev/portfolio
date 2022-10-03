// https://codepen.io/LaithHaleem/pen/wzyMBd

var string = "Front End Developer";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
  str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
  var running = setTimeout(animate, 200);
})();