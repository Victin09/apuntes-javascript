
const utils = require('util');
const sleep = utils.promisify(setTimeout);

module.exports = {
    
    async taskOne() {
        await sleep(4000);
        // Se ejecutara despues del sleep
        console.log('TASK ONE');
    },

    async taskTwo() {
        await sleep(2000);
        // Se ejecutara despues del sleep
        console.log('TASK TWO');
    }
}