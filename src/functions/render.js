import loadgetName from "./getName";
import loadGreet from "./greetUser";

const header = () => {
    const header = document.createElement("header");
    header.className = "header";
    return header;
};

const main = () => {
    const main = document.createElement("main");
    main.className = "main";
    return main;
};

const footer = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Copyright ~ Vannent"
    return footer;
};

function render() {
    const content = document.getElementById("content");
    const container = document.createElement("div")
    container.id = "container";
    content.appendChild(container);
    container.appendChild(header());
    container.appendChild(main());
    container.appendChild(footer());

    if (localStorage.getItem("username") === null) {
        loadgetName();
    } else {
        loadGreet();
    }
    
}

export default render;