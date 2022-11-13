const SHA256 = require ('crypto-js/sha256')

module.exports.getAddress = function () {
    const address = SHA256 (JSON.stringify(new Date())).toString() 
    console.log (`Wallet Address is ${address}`)

}

module.exports.depositAmount = function(amount){
    console.log(`Amount: ${amount} depositted.`)
}

/*module.exports= {
    getAddress,
    depositAmount
}*/