import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

    this.addEventListeners();
  }

  addProduct(product) {
    let cartItem = this.cartItems.find(item => (item.product.id === product.id));

    if (cartItem) {
      cartItem.count++;
    } else {
      cartItem = {product: product, count: 1,};
      this.cartItems.push(cartItem);
    }

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    console.log(this.cartItems)
      let cartItem = this.cartItems.find(item => (item.product.id === productId));
    
       cartItem.count += amount 

       if( cartItem.count < 1 ) {
        this.cartItems.splice( this.cartItems.indexOf(cartItem), 1);
      }
  
    this.onProductUpdate(cartItem);
    console.log(cartItem)
  }

  isEmpty() {
    return this.getTotalCount() === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((acc, cartItem) => {
      acc += cartItem.count;
      return acc;
    }, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((acc, cartItem) => {
      acc += cartItem.count * cartItem.product.price;
      return acc;
    }, 0);
  }

  renderProduct(product, count) {
    
    return createElement(`
    <div class="cart-product" data-product-id="${
      product.id
    }">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${product.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`);
  }

  renderOrderForm() {
    return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(
              2
            )}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
  }

  renderModal() {

      let modal = new Modal();
      modal.setTitle("Your order");
      modal.setBody(createElement(`<div>
      ${this.cartItems.map(item => this.renderProduct(item.product, item.count).outerHTML)}
      ${this.renderOrderForm().outerHTML}
      </div>`));
      modal.open();

     let buttonsCount = document.querySelectorAll('.cart-counter__button');
     

     for (let buttonCount of buttonsCount) {
     
        buttonCount.addEventListener( 'click', (event) => {
          let amount = 0;
    
          if( event.target.closest( '.cart-counter__button_minus' ) ){
            amount = -1;
          } else if( event.target.closest( '.cart-counter__button_plus' ) ){
            amount = 1;
          } else {
            return;
          }
          this.updateProductCount(event.target.closest( '.cart-product' ).dataset.productId, amount)
        } );
     }
  }

  onProductUpdate(cartItem) {

    if (document.querySelector('body').classList.contains("is-modal-open")){
      if( this.cartItems.length === 0) {
        this.modal.close();
        this.modal = null;
      } 
    }

    this.cartIcon.update(this);
  }

  onSubmit(event) {
    // ...ваш код
  };

  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  }
}

