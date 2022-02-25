//synchronous runs step by step without any interrption
//Asynchronous can be interrupted by anyother function
import fetch from "node-fetch"

let a = 1
let b = 2

setTimeout(function(){
    console.log('Asynchronous')
    console.log('Timeout :' + a)
},100)

a=10

fetch('index.html').then(function() {
    console.log('Fetch')
})

console.log('Synchronous')

console.log(a)
console.log(b)