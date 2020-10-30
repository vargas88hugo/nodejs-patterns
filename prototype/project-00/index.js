const scout_prototype = require('./scout_prototype');

const hugo = scout_prototype.clone();
hugo.name = 'Hugo Vargas';
hugo.addItemToList('slingshot');

const elsa = scout_prototype.clone();
elsa.name = 'Elsa Celis';
elsa.addItemToList('reading light');

console.log(`${hugo.name}: ${hugo.shoppingList}`);
console.log(`${elsa.name}: ${elsa.shoppingList}`);
