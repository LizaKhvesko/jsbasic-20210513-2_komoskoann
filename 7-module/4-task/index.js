export default class StepSlider {
  constructor({ steps, value = 0 }) {

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

    let sliderThumb = element.querySelector('.slider__thumb');
    sliderThumb.addEventListener('pointerdown', function(event) {
    
      event.preventDefault();
      let slider = document.querySelector('.slider')
      
      sliderThumb.style.position = 'absolute';
      sliderThumb.style.zIndex = 1000;
      slider.classList.add('slider_dragging')
      document.addEventListener('pointermove', move)

  
    
      move(event);
      function move(event) {
        
        event.preventDefault();
        let sliderValue = document.querySelector('.slider__value');
        let spans = document.querySelectorAll('.slider__steps > span');
        let sliderThumb = document.querySelector('.slider__thumb');
        let sliderProgress = document.querySelector('.slider__progress');
   
        //получаем раст-ие от начала до клика
        let left = event.clientX - element.getBoundingClientRect().left; 
        //относит-ое знач-ие: расст-ие делим на ширину бегунка
        let leftRelative = left / element.offsetWidth;
        if (leftRelative < 0) {
          leftRelative = 0;
        }
        
        if (leftRelative > 1) {
          leftRelative = 1;
        }
        let segments = steps - 1; //кол-во сегментов
        let approximateValue = leftRelative * segments; //узнаем какая ячейка
        let value = Math.round(approximateValue); //округляем
        let valuePercents = leftRelative * 100; // процент для ширины
  
        sliderValue.textContent = value;
        
        sliderThumb.style.left = `${valuePercents}%`;
        sliderProgress.style.width = `${valuePercents}%`;

  
        for (let span of spans) {
          if (span.classList.contains('slider__step-active')) {
            span.classList.remove('slider__step-active')
          }
        }
        spans[value].classList.add('slider__step-active')
       
    
     document.addEventListener('pointermove', move)
    
      document.onpointerup = function() {
      
        document.removeEventListener('pointermove', move)
        document.onpointerup = null;
  
        let slider = document.querySelector('.slider')
        slider.classList.remove('slider_dragging')

       let newEvent = new CustomEvent('slider-change', { 
          detail: value, 
          bubbles: true 
        })
        element.dispatchEvent(newEvent)
      }
    }})
    sliderThumb.ondragstart = () => false;
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

  dragNDrop(element) {
    let segments = this.steps - 1;
    let sliderValue = this.elem.querySelector('.slider__value');
    let sliderThumb = this.elem.querySelector('.slider__thumb');
    let sliderProgress = this.elem.querySelector('.slider__progress');

    sliderThumb.onpointerdown = function(event) {
      event.preventDefault();
     
      
      

      document.addEventListener('pointermove', onPointerMove);
      document.addEventListener('pointerup', onPointerUp);

      function onPointerMove(event) {
      element.classList.add('slider_dragging');
      let left = event.clientX - element.getBoundingClientRect().left;
      let leftRelative = left / element.offsetWidth;
      
      if (leftRelative < 0) {
        leftRelative = 0;
      }
      if (leftRelative > 1) {
        leftRelative = 1;
      }

      let leftPercents = leftRelative * 100;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      sliderThumb.style.left = `${leftPercents}%`;
      sliderProgress.style.width = `${leftPercents}%`;
      sliderValue.innerHTML = value;
      this.value = value;
    }

      function onPointerUp (event) {
        console.log(event);
        document.querySelector('.slider').classList.remove('slider_dragging');
        let newEvent = new CustomEvent('slider-change', { 
        detail: this.value, 
        bubbles: true,         
        });
        element.dispatchEvent(newEvent);
        document.removeEventListener('pointerup', onPointerUp);
        document.removeEventListener('pointermove', onPointerMove);
      }
        
    }  
  }

  removeOnDragStart() {
    sliderThumb.ondragstart = function() {
          return false;
    };
  }
 
    
}


