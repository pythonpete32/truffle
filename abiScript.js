const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('./build/contracts/AragonFuturesOrderBook.json', 'utf8'));
console.log(JSON.stringify(contract.abi));
