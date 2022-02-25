let p = new Promise((resolve, reject) => {
    //resolve - function gets passed
    //reject - fucntion gets rejected
    let a = 1+1
    if(a==2){
        resolve('Success')
    }else{
        reject('Failed')
    }
})


//then here means after completing promise (resloving) do this..
p.then((message) => {
    console.log('This is in then '+ message)
}).catch((message) => {
    console.lof('This is in the catch '+ message)
})