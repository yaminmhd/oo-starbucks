var Owner = require('../src/Owner');
var Item = require('../src/Item');
var Order = require('../src/Order');

describe('Owner', ()=>{
  it('should create an owner successfully', () => {
    var owner = new Owner();
    expect(owner).toBeInstanceOf(Owner);
  });

  it('should create an order containing item and customer name', () => {

    var item1 = new Item('latte', 10);
    var item2 = new Item('cappucino', 8);
    var items = [item1,item2];
    var owner = new Owner();
    var expectedOrder = new Order(items, 'alex');

    expect(owner.orders).toHaveLength(0);
    owner.createOrder(items, 'alex');

    expect(owner.orders).toContainEqual(expectedOrder);
    expect(owner.orders).toHaveLength(1);
  });
})