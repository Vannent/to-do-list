import loadTasks from "../functions/renderTasks";
import loadHeader from "./header";

const loadTasksPage = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    loadHeader();
    loadTasks();
};

export default loadTasksPage;