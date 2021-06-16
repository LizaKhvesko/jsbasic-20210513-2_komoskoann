import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
<<<<<<< HEAD

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
=======
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.render(slides);
    this.initCarousel(this.elem, slides);
  }

  render(slides) {
    const slide = slides.map(value =>`
    <div class="carousel__slide" data-id="${value.id}">
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
    </div>
    `;
  }

 initCarousel(element, slides) {
    const numOfSlides = slides.length;
  
    let carouselInner = element.querySelector('.carousel__inner');

    let carouselArrowRight = document.createElement('div');
    carouselArrowRight.classList.add('carousel__arrow','carousel__arrow_right');
    carouselArrowRight.innerHTML = `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`;
    
    let carouselArrowLeft = document.createElement('div');
    carouselArrowLeft.classList.add('carousel__arrow', 'carousel__arrow_left');
    carouselArrowLeft.innerHTML = `<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">`;

    this.elem.append(carouselArrowRight);
    this.elem.append(carouselArrowLeft);
    
    let currentSlide = 0;
  
    function updateArrow() {
      if (currentSlide === (numOfSlides - 1)) {
        carouselArrowRight.style.display = 'none';
      } else if (currentSlide === 0){
        carouselArrowLeft.style.display = 'none';
      } else {
        carouselArrowLeft.style.display = '';
        carouselArrowRight.style.display = '';
      }
    }

    function addEvent() {
      let carouselButtons = element.querySelectorAll('.carousel__button');
     
      for (let carouselButton of carouselButtons) {
        carouselButton.addEventListener('click', function(event) {
          let slideIds = slides.map(value => value.id);
          let newEvent = new CustomEvent("product-add", { 
            detail: slideIds[currentSlide], 
            bubbles: true, 
          });
          element.dispatchEvent(newEvent);
        })};
    }

    addEvent();
    updateArrow();
  
    carouselArrowRight.addEventListener('click', function() {
      let widthOfSlide = document.querySelector('.carousel__inner').offsetWidth;
      currentSlide++;
      carouselInner.style.transform = `translateX(-${widthOfSlide * currentSlide}px)`;
      updateArrow();
    });
  
    carouselArrowLeft.addEventListener('click', function() {
      let widthOfSlide = document.querySelector('.carousel__inner').offsetWidth;
      currentSlide--;
      carouselInner.style.transform = `translateX(-${widthOfSlide * currentSlide}px)`;
      updateArrow();
    });
    
  }


>>>>>>> cfc8ccb5eb39db80017d9fe2ffb5eb0bc7194e5b
}
