// PROJECTS CARDS EVENTS

var body = document.querySelector('body')
let repu = document.querySelector('.republique')
let cardImg = document.querySelector('.card-img')

repu.addEventListener('mouseenter', function (){
  body.style.background = '#6D9886';
  cardImg.style.filter = 'saturate(0)'
  cardImg.style.transform = 'scale(1.1)'
})
repu.addEventListener('mouseleave', function (){
  body.style.background = '#202020'
  cardImg.style.filter = 'saturate(1)'
  cardImg.style.transform = 'scale(1)'
})