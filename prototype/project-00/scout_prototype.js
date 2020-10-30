const Shopper = require('./Shopper');

const scout = new Shopper();
scout.addItemToList('campaign knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('bag');

module.exports = scout;