import loadGreet from "./greetUser";

export const getName = () => {
    const getusername = document.createElement("div");
    getusername.className = "getusername";
        const getusernameTitle = document.createElement("h1");
        getusernameTitle.className = "getusername-title";
        getusernameTitle.textContent = "What is your name?";

        const getusernameInput = document.createElement("input");
        getusernameInput.type = "text";
        getusernameInput.id = "name";
        getusernameInput.required = true;
        getusernameInput.placeholder = "Chris";
        getusernameInput.addEventListener("click", (e) => {
            getusernameInput.placeholder = "";
        });

        const submitButton = document.createElement("button");
        submitButton.className = "username-submit";
        submitButton.textContent = "Submit";
        submitButton.value = "submit";
        submitButton.addEventListener("click", (e) => {
            if (getusernameInput.value == "") return 
            let value = getusernameInput.value;
            localStorage.setItem("username", value);
            loadGreet();
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