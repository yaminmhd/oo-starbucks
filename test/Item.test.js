var Item = require('../src/Item');

describe('Item', ()=>{
  it('should have a name and price', () => {
    var item = new Item('cold brew', 6);
    expect(item).toBeDefined();
    expect(item.name).toEqual('cold brew');
    expect(item.price).toEqual(6);
  });
})