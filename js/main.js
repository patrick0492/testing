/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}      

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER PRICES ===============*/
const swiperPrices = new Swiper('.prices-swiper',{
  loop: true,
  grabCursor: true,
  spaceBetween: 24,

  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay:{
    delay: 3000,
    disableOnInteraction: false,
  }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId +']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    } else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

if (selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-sun-fill' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  // reset: true, Animations repeat
})
sr.reveal(`.home-content`, {origin: 'bottom'})
sr.reveal(`.home-info`, {origin: 'bottom', delay: 800})
sr.reveal(`.home-data`, {delay: 1400})
sr.reveal(`.home-button`, {origin: 'left', delay: 1800})

sr.reveal(`.delivery-data`, {origin: 'right'})
sr.reveal(`.delivery-content`, {origin: 'left', delay: 600})
sr.reveal(`.delivery-img`, {delay: 1200})

sr.reveal(`.about-data, .contact-map`, {origin: 'left'})
sr.reveal(`.about-img, .contact-data`, {origin: 'right'})

sr.reveal(`.prices-box`, {})
sr.reveal(`.prices-swiper`, {origin: 'bottom', delay: 600})

sr.reveal(`.gallery-image`, {interval: 100})

sr.reveal(`.footer-container`, {})