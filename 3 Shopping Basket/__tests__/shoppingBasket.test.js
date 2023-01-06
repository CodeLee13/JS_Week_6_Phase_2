const ShoppingBasket = require("../src/shoppingBasket.js");

describe("ShoppingBasket", () => {
  it("returns 0 for total price with an empty basket", () => {
    basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);
  });
  it("returns total price of 4.99 when 1 candy is added that costs that much", () => {
    basket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 4.99 };
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });
  it("returns total price of 12.97 when 2 3.99 candies added and 1 4.99", () => {
    basket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 3.99 };
    const candyDouble2 = { getPrice: () => 4.99 };
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    basket.addItem(candyDouble2);
    expect(basket.getTotalPrice()).toEqual(12.97);
  });
});