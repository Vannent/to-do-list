// prompt ask for username
import loadGreet from "./greetUser";

export const getName = () => {
    const getusername = document.createElement("div");
    getusername.className = "getusername";
        const getusernameTitle = document.createElement("h1");
        getusernameTitle.className = "getusername-title";
        getusernameTitle.textContent = "What is your Name?";

        const getusernameInput = document.createElement("input");
        getusernameInput.type = "text";
        getusernameInput.id = "name";
        getusernameInput.placeholder = "Chris";

        const submitButton = document.createElement("button");
        submitButton.className = "username-submit";
        submitButton.textContent = "Submit";
        submitButton.value = "submit";
        submitButton.addEventListener("click", (e) => {
            let value = getusernameInput.value;
            loadGreet(value);
        });

    getusername.appendChild(getusernameTitle);
    getusername.appendChild(getusernameInput);
    getusername.appendChild(submitButton);
    return getusername;
};

const loadgetName = () => {
    const main = document.querySelector(".main")
    main.textContent = "";
    main.appendChild(getName());
};

export default loadgetName;
