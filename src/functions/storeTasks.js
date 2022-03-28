import loadHeader from "../pages/header";

const storeTasks = () => {
    const prompt = document.createElement("div")
    prompt.className = "task-prompt";

        const title = document.createElement("h1");
        title.className = "prompt-title";
        title.textContent = "Title";
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.placeholder = "Getting groceries.";
        titleInput.required = true;

        const description = document.createElement("h1");
        description.className = "prompt-title";
        description.textContent = "Description";
        const descriptionInput = document.createElement("input");
        descriptionInput.className = "prompt-description";
        descriptionInput.type = "text";
        descriptionInput.placeholder = "Getting groceries.";
        descriptionInput.required = true;

        const project = document.createElement("h1");
        project.className = "prompt-title";
        project.textContent = "Project";
        const projectInput = document.createElement("input");
        projectInput.type = "text";
        projectInput.placeholder = "Getting groceries.";
        projectInput.required = true;

        const submitButton = document.createElement("button");
        submitButton.className = "add-button";
        submitButton.textContent = "Add";
        submitButton.addEventListener("click", (e) => {
            if (titleInput.value == "" || descriptionInput.value == "" || projectInput.value == "") return
            localStorage.setItem("task-title", titleInput.value)
            localStorage.setItem("task-description", descriptionInput.value)
            localStorage.setItem("task-project", projectInput.value)
        });


    prompt.append(title, titleInput, description, descriptionInput, project, projectInput, submitButton);
    
    return prompt;
};

const loadTaskPrompt = () => {
    const main = document.querySelector(".main")
    main.textContent = "";
    loadHeader();
    main.appendChild(storeTasks());
};

export default loadTaskPrompt;