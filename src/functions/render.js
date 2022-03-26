import loadgetName from "./getName";

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
    container.appendChild(container);
    container.appendChild(header());
    container.appendChild(main());
    container.appendChild(footer());
    loadgetName();ainer

export default render;