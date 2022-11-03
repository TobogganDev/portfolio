var div1 = document.getElementById("span1")
var div2 = document.getElementById("span2")
var div3 = document.getElementById("span3")
var div4 = document.getElementById("span4")
var cross1 = document.getElementById("cross")
var links1 = document.getElementById("links-contain")
var burger = document.getElementById('burger')

burger.addEventListener('click', function(){
  burger.style.visibility = 'hidden';
  div1.style.width = "100%"
  div2.style.width = "100%"
  div3.style.width = "100%"
  div4.style.width = "100%"
  cross1.style.visibility = "visible"
  cross1.style.transitionDelay = "1.2s"
  links1.style.visibility = "visible"
  links1.style.transitionDelay = "1.2s"
})

cross1.addEventListener('click', function(){
  burger.style.visibility = 'visible'
  div1.style.width = "0%"
  div2.style.width = "0%"
  div3.style.width = "0%"
  div4.style.width = "0%"
  cross1.style.visibility = "hidden"
  cross1.style.transitionDelay = "0s"
  links1.style.visibility = "hidden"
  links1.style.transitionDelay = "0s"
})
