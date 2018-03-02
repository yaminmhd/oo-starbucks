var Outlet = require("../src/Outlet");
var Owner = require('../src/Owner');
var Menu = require('../src/Menu');

describe("Outlet", () => {
  // it.skip("smoke test for Outlet class", () => {
  //   var outlet = new Outlet();
  //   expect(outlet.menu).toBeUndefined();
  // });
  var owner = new Owner('Yamin');
  var menu = new Menu('Coffee Menu');
  var outlet = new Outlet(owner, menu);

  it("should have a owner", () => {
    expect(outlet.owner).toEqual(owner);
  });

  it("should have a menu", () => {
    expect(outlet.menu).toEqual(menu);
  });
});
