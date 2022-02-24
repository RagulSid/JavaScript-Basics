//Promises are meant to replace callback functions
//here is the example of same function used by both callback and promises

function watchTutorialCallback(callback, errorCallback) {        //callback func 
  let userLeft = false
  let userWatchingCatMeme = false

  if (userLeft) {
    errorCallback({
      name: 'User Left', 
      message: ':('
    })
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'Dog < Cat' 
    })
  } else {
    callback('Thumbs up and Subscribe')
  }
}

function watchTutorialPromise() {                            //above func using promises
  let userLeft = true 
  let userWatchingCatMeme = false
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'Dog < Cat' 
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

watchTutorialCallback(message => {
  console.log(message)
}, error => {
  console.log(error.name + ' ' + error.message)
})

watchTutorialPromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})
