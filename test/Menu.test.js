var Menu = require('../src/Menu');
var Item = require('../src/Item');

describe('Menu', ()=>{
  it('should have a list of items', () => {
    var item1 = new Item('black', 5);
    var item2 = new Item('cappucino', 12);
    var item3 = new Item('white', 8);
    var items = [item1,item2,item3];

    var menu = new Menu(items);
    expect(menu.items[0]).toEqual(item1);
    expect(menu.items).toContain(item2);
  });
})
