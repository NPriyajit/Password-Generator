function mode() {
    const mode = document.querySelector("#mode");
    mode.addEventListener("click", function () {
        mode.setAttribute("title", "Color Mode");
        document.querySelector("header").style.background =
            "linear-gradient(57deg, #3b3e3d, #171c1e)";
        document.querySelector(".backhome").style.background =
            "linear-gradient(57deg, #3b3e3d, #171c1e)";
        mode.classList.remove("fa-toggle-off");
        mode.classList.add("fa-toggle-on");

        mode.setAttribute("id", "dark");

        dark();
    });
}

function dark() {
    const dark = document.querySelector("#dark");
    dark.addEventListener("click", function () {
        dark.setAttribute("title", "Dark Mode");
        document.querySelector("header").style.background =
            "linear-gradient(57deg, #1c8256, #178bb5)";

        document.querySelector(".backhome").style.background =
            "linear-gradient(57deg, #1c8256, #178bb5)";
        dark.classList.remove("fa-toggle-on");
        dark.classList.add("fa-toggle-off");
        dark.setAttribute("id", "mode");
        mode();
    });
}


mode();