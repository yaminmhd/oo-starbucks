var Order = require('../src/Order');
var Item = require('../src/Item');

describe('Order', ()=>{
  it('should have an item and a customer name', () => {
    var item1 = new Item('latte', 3);
    var item2 = new Item('cappucino', 6);
    var items = [item1, item2];
    var order = new Order(items, 'Alex');

    expect(order.orderItems).toEqual(items);
  });
})