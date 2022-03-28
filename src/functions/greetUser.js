import loadHeader from "../pages/header";
import loadSidebar from "../pages/sidebar";
import loadCalendar from "./calendar";

function greetUser() {
    const greet = document.createElement("div");
    greet.className = "greet";

        const greeting = document.createElement("div");
        greeting.className = "greeting";
        greeting.innerHTML = "Welcome " + '<b>' + localStorage.getItem("username") + '</b>' + ".";

        const proceedButton = document.createElement("button");
        proceedButton.className = "greeting-button";
        proceedButton.textContent = "Proceed";
        proceedButton.addEventListener("click", (e) => {
            loadHeader();
            loadSidebar();
            loadCalendar();
        });

    greet.appendChild(greeting);
    greet.appendChild(proceedButton);

    return greet;
};

const loadGreet = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(greetUser());
};

export default loadGreet;   