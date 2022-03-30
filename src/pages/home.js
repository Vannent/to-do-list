import loadCalendar from "../functions/calendar";
import loadProjects from "../functions/renderProjects";
import loadTasks from "../functions/renderTasks";
import loadHeader from "./header";

const loadHome = () => {
    loadHeader();
    loadCalendar();
    loadTasks();
    loadProjects();
};


export default loadHome;