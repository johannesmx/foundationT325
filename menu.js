function onPageLoad () {
    const button = document.querySelector(".nav-button")
    const menu = document.querySelector(".shop-nav")

    button.addEventListener("click", function() {
        if(menu.classList.contains("open")) {
            menu.classList.remove("open")
        }
        else {
            menu.classList.add("open")
        }
    })
}

window.addEventListener("load", onPageLoad )