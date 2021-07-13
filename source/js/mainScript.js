document.body.style = "background-color: var(--bs-dark);transition: 0.5s;"
const sun = "source/icons/sun.svg";
const moon = "source/icons/moon.svg"

var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

function setTheme() {
    switch (theme) {
        case "dark":
            setLight();
            break;
        case "light":
            setDark();
            break;
    }
}

function setLight() {
    theme = "light";
    root.style.setProperty(
        "--bs-dark",
        "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    );
    container.classList.remove("shadow-dark");
    setTimeout(() => {
        container.classList.add("shadow-light");
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
}

function setDark() {
    theme = "dark";
    root.style.setProperty("--bs-dark", "#212529");
    container.classList.remove("shadow-light");
    setTimeout(() => {
        container.classList.add("shadow-dark");
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
}