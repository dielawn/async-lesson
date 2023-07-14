const containerDiv = document.getElementById('container')

containerDiv.addEventListener('click', function() {
    console.log('You clicked me!')
})

const array = [1,2,3,4]

array.forEach(callback)

function callback(arg) {
    console.log(arg * 2)
}

// $.ajax({
//     type: "GET",
//     url: "data/dogs.json",
//     success: getDogs
// })

function getDogs(data) {
    console.log(data)
    $.ajax({
        type: "GET",
        url: "data/cats.json",
        success: getCats,
    })
}

function getCats(data) {
    console.log(data)
    $.ajax({
        type: "GET",
        url: "data/fish.json",
        success: getFish,
    })
}

function getFish(data) {
    console.log(data)
}

//promise
new Promise(function(resolve, reject) {
    setTimeout(function() { reject('Error: this is just a test NOT an error.'); }, 1000)
})

new Promise(function(resolve, reject) {
    setTimeout(function() { resolve(10); }, 2000)
})

.then(function(num) {console.log('first ten: ', num); return num * 2; })
.then(function(num) {console.log('second then: ', num); return num *2; })
.then(function(num) {console.log('last then: ', num);})
.catch(handleError)

function handleError(error) {
    console.log(error)
}

//fetch request
function fetchDogs() {
    const promise = fetch("data/dogs.json")
    .then(resp => resp.json())
    .then(data => console.log(data))

    console.log("our promise: ", promise)
}

function fetchCats() {
    const promise = fetch("data/cats.json")
    .then(resp => resp.json())
    .then(resp => resp.logData)

    console.log("our promise: ", promise)
}

function logData(data) {
    console.log(data)
}

// fetchCats()

let truth = false
let lie = false

var pinkyPromise = new Promise(function(resolve, reject) {
        if (truth) {
            resolve('Success!')
        } else {
            reject('Failure!')
        }
    })

pinkyPromise.then(function(result) {
    //do something with result
    console.log(truth)
}).catch(function() {
    //error :(
        console.log(lie)
}).finally(function() {
    //executes regardless of success
    console.log('deal with it')
})

