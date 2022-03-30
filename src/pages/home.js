import loadCalendar from "../functions/calendar";
import loadTasks from "../functions/renderTasks";
import loadHeader from "./header";

const loadHome = () => {
    loadHeader();
    loadCalendar();
    loadTasks();
};


export default loadHome;