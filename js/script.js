
const body = document.querySelector('body')
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const darkTggl = document.getElementById('darkToggle')
const navLinks = document.querySelectorAll('div.navigationDesktop.navList > a')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

let chck = 1
darkTggl.addEventListener('click', () => {
    if (chck == 1) {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        // navLinks.style.color = 'white' 
        chck = 0
    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        // navLinks.style.color = 'black'
        chck = 1
    }
})