let arrow = document.querySelectorAll('.skills-arrow')
let skills = document.querySelectorAll('.container-skills')
let list = document.querySelectorAll('.list')

skills.forEach((x,i) => {
  x.addEventListener('mouseenter', function(){
    arrow[i].style.transform = 'rotate(180deg)'
    arrow[i].style.transition = '1s'
  })
  
  x.addEventListener('mouseleave', function(){
    arrow[i].style.transform = 'rotate(0deg)'
  })
})



