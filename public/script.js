const menu_button = document.querySelector("#menu-button")

const menu = document.querySelector("#menu");

menu_button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})


const darkmode_button = document.querySelector("#darkmode-button")

const html = document.querySelector("#html")

const sun = document.querySelector("#sun")
const moon = document.querySelector("#moon")

darkmode_button.addEventListener("click", () => {
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");

    html.classList.toggle("dark");
})