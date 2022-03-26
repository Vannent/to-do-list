import loadHeader from "../pages/header";
import loadSidebar from "../pages/sidebar";

function greetUser(name) {
    const greet = document.createElement("div");
    greet.className = "greet";

        const greeting = document.createElement("div");
        greeting.className = "greeting";
        greeting.textContent = "Welcome " + name + "!";

        const proceedButton = document.createElement("button");
        proceedButton.className = "greeting-button";
        proceedButton.textContent = "Proceed";
        proceedButton.addEventListener("click", (e) => {
            loadHeader(name);
            loadSidebar();
        });

    greet.appendChild(greeting);
    greet.appendChild(proceedButton);

    return greet;
};

const loadGreet = (name) => {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(greetUser(name));
};

export default loadGreet;