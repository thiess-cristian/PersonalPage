const html = document.querySelector("#html")

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


if (readCookie("dark") == null) {
    html.classList.remove("dark")
} else {
    html.classList.add("dark")
}

const menu_button = document.querySelector("#menu-button")

const menu = document.querySelector("#menu");

menu_button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})


const darkmode_button = document.querySelector("#darkmode-button")


const sun = document.querySelector("#sun")
const moon = document.querySelector("#moon")


darkmode_button.addEventListener("click", () => {
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");

    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
        createCookie("dark", "dark", 1)
    } else {
        eraseCookie("dark")
    }
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