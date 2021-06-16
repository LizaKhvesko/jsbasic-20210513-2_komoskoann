import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');

    this.render(categories)
    this.buttons(this.elem)

  }

  render(categories) {
const list = categories.map(value => `
<a href="#" class="ribbon__item " data-id="${value.id}">${value.name}</a>
`).join('');

this.elem.innerHTML = `
<nav class="ribbon__inner">
${list}
</nav>
`
console.log(list)
  }

buttons(element) {
  let buttonRight = document.createElement('button')
buttonRight.classList.add('ribbon__arrow', 'ribbon__arrow_right', 'ribbon__arrow_visible')
buttonRight.innerHTML = `
<img src="/assets/images/icons/angle-icon.svg" alt="icon">
`
this.elem.append(buttonRight)

let buttonLeft = document.createElement('button')
buttonLeft.classList.add('ribbon__arrow', 'ribbon__arrow_left')
buttonLeft.innerHTML = `
<img src="/assets/images/icons/angle-icon.svg" alt="icon">
`
this.elem.append(buttonLeft)

let ribbonInner = element.querySelector('.ribbon__inner');

  buttonRight.onclick = function() {
    ribbonInner.scrollBy(350,0);
  }
  buttonLeft.onclick = function() {
    ribbonInner.scrollBy(-350,0);
  }

  ribbonInner.onscroll =  function(){
    let buttonLeft = document.querySelector('.ribbon__arrow_left')
    let buttonRight = document.querySelector('.ribbon__arrow_right')
    let scrollLeft = ribbonInner.scrollLeft;
    
    if (scrollLeft > 0) {
      buttonLeft.classList.add('ribbon__arrow_visible')
    } else if(scrollLeft === 0) {
      buttonLeft.classList.toggle('ribbon__arrow_visible')
    }
    
  let scrollWidth = ribbonInner.scrollWidth;
    let clientWidth = ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
 
   if(scrollRight >= 0 || scrollRight < 1) {
      buttonRight.classList.toggle('ribbon__arrow_visible')
    } else {buttonRight.classList.add('ribbon__arrow_visible')}
  }

  ribbonInner.onclick = function(event) {
  let allBoxes = document.querySelectorAll('a');
  event.preventDefault()


  for (let box of allBoxes) {
    if (box.classList.contains('ribbon__item_active')) {
      box.classList.remove('ribbon__item_active')
    }
    let target = event.target;
    let activeBox = target.closest('.ribbon__item');
    activeBox.classList.add('ribbon__item_active');

          let newEvent = new CustomEvent('ribbon-select', { 
            detail: activeBox.dataset.id, 
            bubbles: true, 
          });
          element.dispatchEvent(newEvent);
  }
    }
}

}