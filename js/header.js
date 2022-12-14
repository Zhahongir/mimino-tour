$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $("header").addClass("animate");
            } else {
        $("header").removeClass("animate");
    }
  });


// Hambuger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__wrap__list__item'),
    hamburger = document.querySelector('.header__wrap__content__hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});



// FAQ
  document.addEventListener('DOMContentLoaded', () => {
    const accordeons = document.querySelectorAll('.faq__wrap__list__item');
    
    accordeons.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.faq__wrap__list__item__header__control');
            const content = self.querySelector('.faq__wrap__list__item__content');
    
            self.classList.toggle('open');
    
            // если открыт аккордеон
            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
    });