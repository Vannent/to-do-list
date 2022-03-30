import loadHeader from "../pages/header";
import loadHome from "../pages/home";

let myTasks = [{
    id: 1,
    title: "Create savings account.",
    description: "I have to create this soon",
    project: "financial freedom"
}];

const taskPrompt = () => {
    const prompt = document.createElement("div")
    prompt.className = "task-prompt";

        const title = document.createElement("h1");
        title.className = "prompt-title";
        title.textContent = "Title";
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.placeholder = "Create savings account...";
        titleInput.required = true;

        const description = document.createElement("h1");
        description.className = "prompt-title";
        description.textContent = "Description";
        const descriptionInput = document.createElement("input");
        descriptionInput.className = "prompt-description";
        descriptionInput.type = "text";
        descriptionInput.placeholder = "";
        descriptionInput.required = true;

        const project = document.createElement("h1");
        project.className = "prompt-title";
        project.textContent = "Project";
        const projectInput = document.createElement("input");
        projectInput.type = "text";
        projectInput.placeholder = "Financial Freedom...";
        projectInput.required = true;

        const submitButton = document.createElement("button");
        submitButton.className = "add-button";
        submitButton.textContent = "Add";
        submitButton.addEventListener("click", (e) => {
            if (titleInput.value == "" || descriptionInput.value == "" || projectInput.value == "") return
            const taskTitle = titleInput.value;
            const taskDescription = descriptionInput.value;
            const taskProject = projectInput.value;
            const tasksAdd = task(taskTitle, taskDescription, taskProject);
            myTasks.push(tasksAdd);
            titleInput.value = "";
            descriptionInput.value = "";
            projectInput.value = "";
            loadHome();
            storeTask();
            console.log(myTasks)
        });


    prompt.append(title, titleInput, description, descriptionInput, project, projectInput, submitButton);
    
    return prompt;
};

const task = (title, description, project) => {
    return { id: Date.now().toString(), title: title, description: description, project: project }
};

const storeTask = () => {
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
};

const loadTaskPrompt = () => {
    const main = document.querySelector(".main")
    main.textContent = "";
    loadHeader();
    main.appendChild(taskPrompt());
};

export default loadTaskPrompt;