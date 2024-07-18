//OS module
//PATH module
//FS module
//HTTP module

const { request } = require('http');
const os = require('os')

const userInfo = os.userInfo();
// console.log(userInfo);

const uptime = os.uptime();
// console.log('system uptime is ' + uptime);

const currentOS = {
    osName : os.type(),
    release: os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}

// console.log(currentOS);

//---------------path module------------------

const path = require('path')

console.log(path.sep); //for windows '\'

const textFilePath =  path.join('/assets', 'text1')
const textBaseName = path.basename(textFilePath);
const absPath = path.resolve(__dirname, '/assets', 'text1')
console.log(textFilePath, textBaseName, absPath);

//---------------Fs module------------------
//Two ways - Async - non-blocking , sync - blocking


//sync
const {readFileSync, writeFileSync} = require('fs')

const fileData = readFileSync('./assets/text1.txt', 'utf8')
// console.log(fileData);

writeFileSync('./assets/result-sync.txt',
              `\nResult : ${fileData}`, 
              {flag : 'a'}
            )

//async //callback-hell
const filePath = './assets/result-sync.txt'
const {readFile, writeFile} = require('fs')

readFile(filePath, 'utf8', (err, result) => {
    if(err){
        return;
    }
    const firstResult = result;
    readFile('./assets/result-sync.txt', 'utf8', (err, result) => {
        if(err){
            return;
        }
        console.log(`first result : ${firstResult} \nResult is ${result}`);
    })
});
