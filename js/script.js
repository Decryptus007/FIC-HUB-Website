const body = document.querySelector('body')
const slider = document.getElementById('slider')
const navList = document.getElementById('navList')

let sliderSwitch = false

slider.addEventListener('click', () => {
    if (!sliderSwitch) {
        body.style.transform = 'translateX(75%)'
        body.classList.add('stop-scrolling')
        slider.classList.remove('fa-sliders')
        slider.classList.add('fa-close')
        sliderSwitch = true
    } else {
        body.style.transform = 'translateX(0)'
        body.classList.add('stop-scrolling')
        slider.classList.remove('fa-close')
        slider.classList.add('fa-sliders')
        sliderSwitch = false
    }
})