const Candy = require("../src/candy.js");

describe("Candy", () => {
  it("should return the name of the candy", () => {
    const candy = new Candy("Mars", 3.99);
    expect(candy.getName()).toEqual("Mars");
  });
  it("should return the price of the candy", () => {
    const candy = new Candy("Mars", 3.99);
    expect(candy.getPrice()).toEqual(3.99);
  });
});