var Order = require('./Order')

class Owner{
  constructor(){
    this.orders = [];
  }

  createOrder(items, customerName){
    var order = new Order(items, customerName)

    this.orders.push(order);
  }
}

module.exports = Owner;