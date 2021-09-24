/* Opening Animation */

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");


window.addEventListener("DOMContentLoaded", () => {

    logoSpan.forEach((span, indx) => {
        setTimeout(() => {
            span.classList.add("active")
        }, (indx + 1) * 400)
    });

    setTimeout(() => {
        logoSpan.forEach((span, indx) => {
            setTimeout(() => {
                span.classList.remove("active")
                span.classList.add("fade")
            }, (indx + 1) * 50)
        })
    }, 2000)

    setTimeout(() => {
        intro.style.top = "-100vh"
    }, 2300)
})