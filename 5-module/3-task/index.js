function initCarousel() {
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

}
