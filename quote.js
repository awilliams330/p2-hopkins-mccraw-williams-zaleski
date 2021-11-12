// Get form, input, and quote references
var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var quoteEl = document.getElementById('quote')
var textEl = document.getElementById('render')

//add an event to quote of the day
//return data in json format

formEl.onsubmit = function(e) {
    e.preventDefault()
    fetch('http://api.quotable.io/random')
    // console.log( fetch('https://api.quotable.io/random'))
        .then(response => response.json())
        .then(data => {
           var render = document.getElementsByClassName('render')
           document.getElementById("render").textContent = data.content
           textEl = console.log(data.content)
    })
}
