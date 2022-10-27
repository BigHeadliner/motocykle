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
 
    $(document).ready(function(){
        $(".menu a ").on("click", function (event) {
          //відміняєм стандартне опрацювання натиску ссилки
          event.preventDefault();
           
          //забираєм ідентифікатор блоку з атрибута href 
          var id  = $(this).attr('href'),
      
          //дізнаємся висоту від початку сторінки до блоку на який ссилається якір
            top = $(id).offset().top;
          
          //анімуєм перехід на відстань - top за 1500 мс
          $('body,html').animate({scrollTop: top}, 1500);
        });
      }); 

});