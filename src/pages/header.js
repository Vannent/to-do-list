import loadSidebar from "./sidebar";

let sidebarCheck = true;

// sidebar button
const header = (name) => {
    const header = document.createElement("header");

    const leftside = document.createElement("div");
    leftside.className = "leftside-header";
        const sidebarIcon = document.createElement("button");
        sidebarIcon.className = "sidebar-buttons";
        sidebarIcon.innerHTML = `
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
        `;
        sidebarIcon.addEventListener("click", (e) => {
            if (sidebarCheck == true) {
                let content = document.querySelector("#content");
                content.removeChild(content.lastChild);
                sidebarCheck = false;
            } else if ( sidebarCheck == false) {
                loadSidebar();
                sidebarCheck = true;
            } else return
        });

        const greeting = document.createElement("p")
        greeting.textContent = "Hi, " + name + ".";

    const rightside = document.createElement("div");
    rightside.className = "rightside-header";
        const addButton = document.createElement("button");
        sidebarIcon.className = "sidebar-buttons";
        addButton.innerHTML = `
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
        `;

    header.appendChild(leftside);
    header.appendChild(rightside);

    leftside.appendChild(sidebarIcon);
    leftside.appendChild(greeting);

    rightside.appendChild(addButton);

    return header;
}

const loadHeader = (name) => {
    const main = document.querySelector(".main")
    main.textContent = "";
    main.appendChild(header(name));
};

export default loadHeader;