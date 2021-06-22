export default class StepSlider {
  constructor({ steps, value = 0 }) {
<<<<<<< HEAD
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    let element = this.elem;
    this.render({ steps})

    this.elem.onclick = function(event) {
      let sliderValue = document.querySelector('.slider__value');
      let spans = document.querySelectorAll('.slider__steps > span');
      let sliderThumb = document.querySelector('.slider__thumb');
      let sliderProgress = document.querySelector('.slider__progress');
      
      //получаем раст-ие от начала до клика
      let left = event.clientX - element.getBoundingClientRect().left; 
      //относит-ое знач-ие: расст-ие делим на ширину бегунка
      let leftRelative = left / element.offsetWidth;
      let segments = steps - 1; //кол-во сегментов
      let approximateValue = leftRelative * segments; //узнаем какая ячейка
      let value = Math.round(approximateValue); //округляем
      let valuePercents = value / segments * 100; // процент для ширины

      sliderValue.textContent = value;
      
      sliderThumb.style.left = `${valuePercents}%`;
      sliderProgress.style.width = `${valuePercents}%`;
      
      for (let span of spans) {
        if (span.classList.contains('slider__step-active')) {
          span.classList.remove('slider__step-active')
        }
      }
      spans[value].classList.add('slider__step-active')
     
      let newEvent = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: value, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает - это понадобится в дальнейшем
      })
      element.dispatchEvent(newEvent);
    }
  }

  render({ steps}) {
    let span = [];
    for (let i = 0; i < steps; i++) {
      span.push('<span></span>')
    }

    span[0] = "<span class = 'slider__step-active'></span>"
    let spanStr = span.join('')
    
    this.elem.innerHTML = 
  `
  <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>

    <div class="slider__progress" style="width: 50%;"></div>

    <div class="slider__steps">
     ${spanStr}
    </div>
  `

=======
    this.value = value;
    this.steps = steps;
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.render();
    this.addEvent(this.elem);
>>>>>>> 9e917926d24b114d2b44806487f7f828f90b5970
  }

  render() {

    this.elem.innerHTML = `
    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 50%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
      ${this.renderSteps()}
    </div>`;
    
  }

  renderSteps() {
    let steps = '';
    for (let i=0; i < this.steps; i++) {
      if (i == 0) {
      steps += '<span class="slider__step-active"></span>';
      } else {
        steps += '<span></span>';
      }
    }
    return steps;

  }

  addEvent(element) {
    let segments = this.steps - 1;
    let sliderValue = this.elem.querySelector('.slider__value');
    let sliderThumb = this.elem.querySelector('.slider__thumb');
    let sliderProgress = this.elem.querySelector('.slider__progress');

    this.elem.addEventListener('click', function(event) {
      
      let left = event.clientX - element.getBoundingClientRect().left;
      let leftRelative = left / element.offsetWidth;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      sliderThumb.style.left = `${valuePercents}%`;
      sliderProgress.style.width = `${valuePercents}%`;
      sliderValue.innerHTML = value;

      
      let newEvent = new CustomEvent('slider-change', { 
        detail: value, 
        bubbles: true,         
      });
      element.dispatchEvent(newEvent);


    })
  }


    
}
