// Page title 
(function () {
    var titleMainOne = document.querySelector('.intro__wrap__content__title-mob__text');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('page-title-1');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();




// Page title 
(function () {
    var titleMainOne = document.querySelector('.intro__wrap__content__subtitle-mob__text');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('page-title-2');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();




// Page title 
(function () {
    var titleMainOne = document.querySelector('.intro__wrap__content__title__text');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('page-title-1');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();




// Page title 
(function () {
    var titleMainOne = document.querySelector('.intro__wrap__content__subtitle__text');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('page-title-2');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();




// Page slider
(function () {
    var titleMainOne = document.querySelector('.intro__wrap__gallery');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-item');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();









