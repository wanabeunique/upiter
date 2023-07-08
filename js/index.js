const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav')
const menu = document.querySelector('.header__menu')

burger.addEventListener('click', () => {
  nav.classList.toggle('header__nav--active')
  menu.classList.toggle('header__menu--active')
})

const heroSlides = [document.querySelector('#hero-slide1'), document.querySelector('#hero-slide2'), document.querySelector('#hero-slide3')]
const heroSelects = [document.querySelector('#hero-select1'), document.querySelector('#hero-select2'), document.querySelector('#hero-select3')]

heroSelects.forEach(select => {
  select.addEventListener('click', () => switchSlide(event))
})

function switchSlide(e){
  heroSelects.forEach( (select, index) => {
    if (select == e.target.closest('.hero__select')){
      heroSlides[index].classList.add('active-slide')
      heroSelects[index].classList.add('active-select')
    }
    else{
      heroSlides[index].classList.remove('active-slide')
      heroSelects[index].classList.remove('active-select')
    }
  })
}

heroSlides[0].classList.add('active-slide')
heroSelects[0].classList.add('active-select')


const swiper = new Swiper('.examples__swiper', {
  slidesPerView: 1,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 35,
  breakpoints: {
    "1024" : {
      slidesPerView: 3
    },
    "700" : {
      slidesPerView: 2
    }
  }
});