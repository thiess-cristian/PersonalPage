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


const email_button = document.querySelector("#email-button")
const email_tooltip = document.querySelector("#email-tooltip")

email_button.addEventListener("click", () => {
    email_tooltip.classList.remove("hidden");
})

email_button.addEventListener("mouseout", () => {
    email_tooltip.classList.add("hidden");
})


const phone_button = document.querySelector("#phone-button")
const phone_tooltip = document.querySelector("#phone-tooltip")

phone_button.addEventListener("click", () => {
    phone_tooltip.classList.remove("hidden");
})

phone_button.addEventListener("mouseout", () => {
    phone_tooltip.classList.add("hidden");
})