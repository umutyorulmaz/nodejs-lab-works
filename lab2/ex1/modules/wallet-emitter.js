const SHA256 = require ('crypto-js/sha256')
const events = require ('events')
const eventEmitter = new events.EventEmitter;




function transactionRecieved(){
    console.log("Transaction recieved...")
}

const getAddress = function (){
    const address = SHA256 (JSON.stringify(new Date())).toString()
    console.log (`Wallet Address is ${address}`)
}

const depositAmount = function (amount) {
    eventEmitter.emit('deposited')
    console.log(`Amount: ${amount} deposited. `)
}

module.exports = {
    getAddress,
    depositAmount
} 