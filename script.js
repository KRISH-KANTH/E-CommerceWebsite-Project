var sidenav = document.querySelector(".side-bars")


function showNav() {
    sidenav.style.left = "1px"

}
function hideNav() {
    sidenav.style.left = "-50%"
}

var products = document.getElementById("product-section")
var search = document.getElementById("searcher")
var productlists = products.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var entertext = event.target.value.toUpperCase()

    for (count = 0; count < productlists.length; count++) {
        var productname = productlists[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(entertext) > -1) {
            productlists[count].style.display = "block"
        }
        else {
            productlists[count].style.display = "none"
        }
    }
}

)
