import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;


    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    
  this.render(slides);
  this.initCarousel(this.elem, slides);


  }



  initCarousel(element, slides){
let buttonRight = document.createElement('div')
buttonRight.classList.add('carousel__arrow', 'carousel__arrow_right')
buttonRight.innerHTML = `
<img src="/assets/images/icons/angle-icon.svg" alt="icon">
`
this.elem.append(buttonRight)

let buttonLeft = document.createElement('div')
buttonLeft.classList.add('carousel__arrow', 'carousel__arrow_left')
buttonLeft.innerHTML = `
<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
`
this.elem.append(buttonLeft)


// let carouselInner = element.querySelector('.carousel__inner');
let numOfSlides = slides.length;
let currentSlide = 0;





function updateArrow() {
  if (currentSlide === (numOfSlides - 1)) {
    buttonRight.style.display = 'none';
  } else if (currentSlide === 0){
    buttonLeft.style.display = 'none';
  } else {
    buttonRight.style.display = '';
    buttonLeft.style.display = '';
  }
}

updateArrow();

buttonRight.addEventListener('click', function() {
  let carouselInner = document.querySelector('.carousel__inner')
  let widthOfSlide = carouselInner.offsetWidth;
  currentSlide++;
  console.log(widthOfSlide)
  carouselInner.style.transform = `translateX(-${widthOfSlide * currentSlide}px)`;
  updateArrow();
});

buttonLeft.addEventListener('click', function() {
  let carouselInner = document.querySelector('.carousel__inner')
  let widthOfSlide = carouselInner.offsetWidth;
  currentSlide--;
  carouselInner.style.transform = `translateX(-${widthOfSlide * currentSlide}px)`;
  updateArrow();
});
console.log(element.querySelector('.carousel__button'))


let buttons = element.querySelectorAll('.carousel__button');
for (let button of buttons) {
button.addEventListener('click', function(event) { 
  
  
  let slideID = slides.map(value => value.id)
 
  element.dispatchEvent(new CustomEvent("product-add", { 
   detail:slideID[currentSlide], 
    bubbles: true 
}))
  } )}

}
  
  render(slides) {
const slide = slides.map(value => `
<div class="carousel__slide" data-id='${value.id}'>
  <img src="/assets/images/carousel/${value.image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${value.price.toFixed(2)}</span>
    <div class="carousel__title">${value.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>
`).join('');

this.elem.innerHTML = `
<div class="carousel__inner">
${slide}
</div>`
}

}
