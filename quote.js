// Get form, input, and quote references
var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var quoteEl = document.getElementById('quote')
var textEl = document.getElementsByClassName('render')

//add an event to quote of the day
//return data in json format

formEl.onsubmit = function(e) {
    e.preventDefault()
    fetch('http://api.quotable.io/random')
    // console.log( fetch('https://api.quotable.io/random'))
        .then(response => response.json())
        .then(data => {
            console.log(`${data.content} —${data.author}`)
    })
}

 function data(dataObj) {
    // console.log(dataObj.content)
    // textEl.innerHTML = 
    console.log(dataObj)
}
