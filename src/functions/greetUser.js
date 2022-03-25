// greet username
const greetUser = () => {
    const greet = document.createElement("div");
    greet.className = "greet";

        const greeting = document.createElement("div");
        greeting.className = "greeting";
        greeting.textContent = "Welcome User!"

        const proceedButton = document.createElement("button");
        proceedButton.className = "greeting-button";
        proceedButton.textContent = "Proceed";

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

// ask to proceed