$(function () { 
     
    const hamburger = document.getElementById('menu__btn')
    const headerMenu = document.getElementById('menu__list')
    const menuLinks = document.querySelectorAll('.menu__link')


    hamburger.addEventListener('click', () => {
        headerMenu.classList.toggle('menu__list--active')
        hamburger.classList.toggle('menu__btn--open')
    })

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerMenu.classList.remove('menu__list--active')
            hamburger.classList.remove('menu__btn--open')
        })
    })  

});