const events = require('events')
const eventEmitter = new events.EventEmitter;

eventEmitter.on('deposited', () => console.log(`main received...`))

//const wallet = require ("./modules/wallet")
const wallet = require ("./modules/wallet-emitter")

console.log ('\n')
wallet.getAddress()
wallet.depositAmount(100)