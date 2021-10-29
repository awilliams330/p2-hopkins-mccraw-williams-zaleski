
var hamburger = document.querySelector('.bun-box')
var menulist = document.querySelector('.hamburger-ul')
var wrapper = document.querySelector('.wrapper')

hamburger.addEventListener('click', function(banana){
    hamburger.classList.toggle("cross")
    menulist.classList.toggle("change")
    wrapper.classList.toggle("darkerpurple")
})
