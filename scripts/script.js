const burger = document.querySelector('[data-burger]')
const nav = document.querySelector('[data-nav]')
const body = document.body
const navItems = document.querySelectorAll('a')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active')
    nav.classList.toggle('nav--visible')
    body.classList.toggle('stop-scroll')
})

navItems.forEach(el => {
    el.addEventListener('click', () => {
        burger.classList.remove('burger--active')
        nav.classList.remove('nav--visible')
        body.classList.remove('stop-scroll')
    })
})