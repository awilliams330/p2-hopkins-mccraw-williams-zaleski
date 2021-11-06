
var heading = document.getElementsByClassName("accheading")
//console.log(heading)
for (i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function() {
    console.log[i]
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        this.style.backgroundColor = "#552988"
        this.style.color = "white"
        } else {
        content.style.display = "block"
        this.style.backgroundColor = "#552988"
        this.style.color = "white"
        }
        this.classList.toggle('active')
    })
}
