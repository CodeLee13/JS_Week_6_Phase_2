const Candy = require("../../src/candy.js");
const ShoppingBasket = require("../../src/shoppingBasket.js");

describe("Integration", () => {
  it("returns 8.98 total price when added Mars and Cadburys", () => {
    const basket = new ShoppingBasket();
    basket.addItem(new Candy("Mars", 3.99));
    basket.addItem(new Candy("Cadburys", 4.99));
    expect(basket.getTotalPrice()).toEqual(8.98);
  });
});