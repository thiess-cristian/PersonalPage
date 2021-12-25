const menu_button = document.querySelector("#menu-button")

const menu = document.querySelector("#menu");

menu_button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})