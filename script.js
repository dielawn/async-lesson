'use strict'
const containerDiv = document.getElementById('container')


const searchBtn = document.getElementById('searchBtn')

let searchFor

const getSearchInput = () => {
    const searchInput = document.getElementById('searchInput')
  return  searchFor = searchInput.value 
}


searchBtn.addEventListener('click', () => {
    console.log(getSearchInput())
    getSearchInput()  
    loadNewImage()
})

let imageSrc

const loadNewImage = () => {
    const gifImage = document.getElementById('gifImage')
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=OgByqKc6eOHLhIPmaUX8eaWUTPstl8DL&s=${searchFor}`, {
    mode: 'cors'
  })
.then((res) => {
    res.json().then((data) => {
        console.log(data.data.images.original.url)
        imageSrc = data.data.images.original.url
        gifImage.src = imageSrc
    })
})
.catch((err) => {
    console.log('no this did not work')
})
}



// //handle multiple promises
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Good to go!')
//     }, 1000)   
// })

// let myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Promise 2 - the promising')
//     }, 1500)
// })

// Promise.all([myPromise,myPromise2])
// .then((data) => {
//     console.log(data)
// }) 
// .catch((err) => {
//     console.log(err)
// })


//odin lesson

// myPromise.then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })


// containerDiv.addEventListener('click', function() {
//     console.log('You clicked me!')
// })

// const array = [1,2,3,4]

// array.forEach(callback)

// function callback(arg) {
//     console.log(arg * 2)
// }

// // $.ajax({
// //     type: "GET",
// //     url: "data/dogs.json",
// //     success: getDogs
// // })

// function getDogs(data) {
//     console.log(data)
//     $.ajax({
//         type: "GET",
//         url: "data/cats.json",
//         success: getCats,
//     })
// }

// function getCats(data) {
//     console.log(data)
//     $.ajax({
//         type: "GET",
//         url: "data/fish.json",
//         success: getFish,
//     })
// }

// function getFish(data) {
//     console.log(data)
// }

// //promise
// new Promise(function(resolve, reject) {
//     setTimeout(function() { reject('Error: this is just a test NOT an error.'); }, 1000)
// })

// new Promise(function(resolve, reject) {
//     setTimeout(function() { resolve(10); }, 2000)
// })

// .then(function(num) {console.log('first ten: ', num); return num * 2; })
// .then(function(num) {console.log('second then: ', num); return num *2; })
// .then(function(num) {console.log('last then: ', num);})
// .catch(handleError)

// function handleError(error) {
//     console.log(error)
// }

// //fetch request
// function fetchDogs() {
//     const promise = fetch("data/dogs.json")
//     .then(resp => resp.json())
//     .then(data => console.log(data))

//     console.log("our promise: ", promise)
// }

// function fetchCats() {
//     const promise = fetch("data/cats.json")
//     .then(resp => resp.json())
//     .then(resp => resp.logData)

//     console.log("our promise: ", promise)
// }

// function logData(data) {
//     console.log(data)
// }

// fetchCats()

// let truth = false
// let lie = false

// var pinkyPromise = new Promise(function(resolve, reject) {
//         if (truth) {
//             resolve('Success!')
//         } else {
//             reject('Failure!')
//         }
//     })

// pinkyPromise.then(function(result) {
//     //do something with result
//     console.log(truth)
// }).catch(function() {
//     //error :(
//         console.log(lie)
// }).finally(function() {
//     //executes regardless of success
//     console.log('deal with it')
// })

// function get(url) {
//     //return new promise
//     return new Promise(function(resolve, reject) {
//         var req = new XMLHttpRequest()
//         requestAnimationFrame.open('Get', url)

//         req.onload = function() {
//             //this is called even on 404
//             //check status
//             if (req.status == 200) {
//                 //resolve the promise with the response text
//                 resolve(req.response)
//             } else {
//                 //otherwise reject with the status text
//                 reject(Error(req.statusText))
//             }
//         }
//         //handle network errors
//         requestAnimationFrame.onerror = function() {
//             reject(Error("Network Error"))
//         }
//         //make the request
//         req.send()
//     })
// }

// //use it
// get('story.json').then(function(response) {
//     console.log("Success!", response)
// }, function(error) {
//     console.error('Failed!', error)
// })

// var userCache = {}

// function getUserDetail(username) {
//     //cached or not, a promise will be returned
//     if (userCache[username]) {
//         //return a promise with the "new" keyword
//         return Promise.resolve(userCache[username])
//     }
//     //use the fetch API to get the information
//     //fetch returns a promise
//     return fetch('users/' + username + '.json')
//     .then(function(result) {
//         userCache[username] = result
//         return result
//     })
//     .catch(function() {
//         throw new Error('Could not find user: ' + username)
//     })
// }

// new Promise(function(resolve, reject) {
//     // A mock async action using setTimeout
//     setTimeout(function() { resolve(10); }, 3000)
// })
// .then(function(result) {
//     console.log(result)
// })


// //if multiple async wait for all
// Promise.all([promise, promise2]).then(function(results) {
//     //both promises resolved
// })
// .catch(function(error) {
//     //one or more promises was rejected
// })

// //promise.race
// var req1 = new Promise(function(resolve, reject) {
//     // mock async
//     setTimeout(function() { resolve("First!")}, 8000)
// })
// var req2 = new Promise(function(resolve, reject) {
//     setTimeout(function() { resolve('Second!')}, 3000)
// })
// Promise.race([req1, req2]).then(function(one) {
//     console.log('Then: ', one)
// }).catch(function(one, two) {
//     console.log('Catch: ', one)
// })

// //promise 

// function add(xPromise, yPromise) {
//     return Promise.all([xPromise, yPromise])
//     .then(function(values) {
//         return values[0] + values[1]
//     })
// }

// add(fetchX(), fetchY())
// .then(function(sum) {
//     console.log(sum)
// }, function(err) {
//     console.error(err)
// }
// )
