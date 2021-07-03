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

    this.onProductUpdate(this.cartItems);
  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(item => (item.product.id === productId));
    cartItem.count += amount;
    if (cartItem.count === 0) {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    };
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    if (this.cartItems.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  getTotalCount() {
    let totalCount = this.cartItems.map(item => (item.count));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return totalCount.reduce(reducer);
  }

  getTotalPrice() {
    let price = this.cartItems.map(item => (item.product.price));
    let totalCount = this.cartItems.map(item => (item.count));
    return price.reduce(function(r,a,i) {return r + a * totalCount[i]},0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}