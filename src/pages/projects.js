import loadProjects from "../functions/renderProjects";
import loadHeader from "./header";

const loadProjectsPage = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    loadHeader();
    loadProjects();
};

export default loadProjectsPage;