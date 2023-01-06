const searchCandies = require("./seachCandies.js");

describe("searchCandies", () => {
  it("returns Mars and Maltesers when passed Ma and 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("returns Mars when passed Ma and 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });
  it("returns Skitties, Skittles, Starburst when passed S and 10", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });
  it("returns Skitties, Skittles when passed S and 4", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
});