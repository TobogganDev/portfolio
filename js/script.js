let click = document.getElementById("click")
let span1 = document.getElementById("span1")
let span2 = document.getElementById("span2")
let span3 = document.getElementById("span3")
let span4 = document.getElementById("span4")
let cross = document.getElementById("cross")
let links = document.getElementById("links-contain")

click.addEventListener('click', function(){
  span1.style.width = "100%"
  span2.style.width = "100%"
  span3.style.width = "100%"
  span4.style.width = "100%"
  cross.style.visibility = "visible"
  cross.style.transitionDelay = "1.2s"
  links.style.visibility = "visible"
  links.style.transitionDelay = "1.2s"
})

cross.addEventListener('click', function(){
  span1.style.width = "0%"
  span2.style.width = "0%"
  span3.style.width = "0%"
  span4.style.width = "0%"
  cross.style.visibility = "hidden"
  cross.style.transitionDelay = "1.2s"
  links.style.visibility = "hidden"
  links.style.transitionDelay = "0s"
})

