// Animação Menu

window.addEventListener('scroll', function(){
    const header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})

//animação ondas

let onda1 = document.getElementById('onda1')
let onda2 = document.getElementById('onda2')
let onda3 = document.getElementById('onda3')
let onda4 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    let rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagemPos * 2 + 'px'
    onda2.style.backgroundPositionX = 300 + rolagemPos * -2 + 'px'
    onda3.style.backgroundPositionX = 200 + rolagemPos * 0.7 + 'px'
    onda4.style.backgroundPositionX = 100 + rolagemPos * -0.7 + 'px'
})