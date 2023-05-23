// Modules - Encapsulated code (only share minimum)
// Common JS, every file is module (by default) 
const {john,peter}= require('./4-names')
const sayHi =  require('./5-utils')
const shakeAndBake = require('./6-alternative-flavours')

require('./7-mind-grenade')

sayHi('samantha')
sayHi(john)
sayHi(peter)

