// PROJECTS CARDS EVENTS

var body = document.querySelector('body')
let repu = document.querySelector('.republique')
let cardImg = document.querySelectorAll('.card-img')
let color =  ['#6D9886', '#4C6793']
let project = document.querySelectorAll('.container-card')
console.log(cardImg)
project.forEach((x,i) => {
  x.addEventListener('mouseenter', (e)=>{
    body.style.background = color[i]
    cardImg[i].style.filter = 'saturate(0)'
    cardImg[i].style.transform = 'scale(1.1)'
  })
  x.addEventListener('mouseleave', (e)=>{
    body.style.background = '#202020'
    cardImg[i].style.filter = 'saturate(1)'
    cardImg[i].style.transform = 'scale(1)'
  })
});