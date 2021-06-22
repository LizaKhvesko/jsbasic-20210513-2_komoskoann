export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
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
    //console.log(this.cartItems)
  
  }

  updateProductCount(productId, amount) {
      console.log(this.cartItems)
      let cartItem = this.cartItems.find(item => (item.product.id === productId));
    
       cartItem.count += amount 
   
   
    this.onProductUpdate(cartItem);
    console.log(cartItem)
  }

  isEmpty() {
    console.log(this.getTotalCount() === 0)
   
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

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}
 
 
 

