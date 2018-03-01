var Outlet = require("../src/Outlet");
describe("Outlet", () => {
  it("smoke test for Outlet class", () => {
    var outlet = new Outlet();
    expect(outlet.menu).toBeUndefined();
  });
});
