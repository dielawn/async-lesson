const containerDiv = document.getElementById('container')

containerDiv.addEventListener('click', function() {
    console.log('You clicked me!')
})

const array = [1,2,3,4]

array.forEach(callback)

function callback(arg) {
    console.log(arg * 2)
}

$.ajax({
    type: "GET",
    url: "data/dogs.json",
    success: getDogs
})

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
