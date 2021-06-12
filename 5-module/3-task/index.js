function initCarousel() {
<<<<<<< HEAD
 let buttonLeft = document.querySelector('.carousel__arrow_left');
 let buttonRight = document.querySelector('.carousel__arrow_right');
 let slides = document.querySelector('.carousel__inner');


 buttonRight.onclick = function () {
   while (slides.dataset.id !== 'chicken-springrolls') {
   slides.style.transform = 'translateX(-500px)';
   slides++
   }
 }

 buttonLeft.onclick = function () {
  slides.style.transform = 'translateX(500px)';
  slides--
}

=======
  const numOfSlides = 4;

  let carouselInner = document.querySelector('.carousel__inner');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');

  let currentSlide = 0;
  let widthOfSlide = carouselInner.offsetWidth;

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

  updateArrow();

  carouselArrowRight.addEventListener('click', function() {
    currentSlide++;
   carouse lInner.style.transform = `translateX(-${widthOfSlide * currentSlide}px)`;
    updateArrow();
  });

  carouselArrowLeft.addEventListener('click', function() {
    currentSlide--;
    carouselInner.style.transform = `translateX(-${widthOfSlide * currentSlide}px)`;
    updateArrow();
  });
  
>>>>>>> beeb2a95d0b812ff3930af7789b4103634923630
}
