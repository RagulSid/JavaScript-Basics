// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// console.log(__dirname);
// console.log(process);

setInterval(() => {
    console.log("Hello Node");
}, 10000);

//Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const greetUser = (name) => {
    console.log(name);
}

function greet1(name){
    console.log(name);
}

//Import Modules
const user = require('./module')
greetUser(user.name);

require('./mind-grenade')