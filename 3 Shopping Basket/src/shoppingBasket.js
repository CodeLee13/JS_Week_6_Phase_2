class ShoppingBasket {
    constructor() {
      this.basket = [];
    }
  
    addItem(candy) {
      this.basket.push(candy);
    }
  
    getTotalPrice() {
      let sum = 0;
      this.basket.forEach((itemOfCandy) => {
        sum += itemOfCandy.getPrice();
      });
      return sum;
    }
  }
  
  module.exports = ShoppingBasket;