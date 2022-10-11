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
  links.style.visibility = "visible"
  links.style.transitionDelay = "1.2s"
})

cross.addEventListener('click', function(){
  span1.style.width = "0%"
  span2.style.width = "0%"
  span3.style.width = "0%"
  span4.style.width = "0%"
  cross.style.visibility = "hidden"
  links.style.visibility = "hidden"
  links.style.transitionDelay = "0s"
})

// *****************************

let bgImage = document.getElementById('background')
let sensitivity = 100

bgImage.addEventListener('mousemove', addCoors)

function addCoors(e){
  const x = e.clientX
  const y = e.clientY

  bgImage.style.backgroundPosition = ` ${x / sensitivity}px ${y / sensitivity}px`
}