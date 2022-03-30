const tasks = () => {
    const tasks = document.createElement("div");
    tasks.className = "tasks";

        const tasksTitle = document.createElement("h1");
        tasksTitle.className = "tasks-title";
        tasksTitle.textContent = "Tasks";

        const tasksContainer = document.createElement("div");
        tasksContainer.className = "tasks-container";

            function task(id, title, description, project) {
                this.id = id;
                this.title = title;
                this.description = description;
                this.project = project;
            };

            const storedTasks = JSON.parse(localStorage.getItem("myTasks"))
            storedTasks.forEach((task) => {
                const taskCard = document.createElement("div");
                taskCard.className = "task-card";
        
                taskCard.innerHTML = `
                <div class="task-title">${task.title}</div>
                <div class="task-description">${task.description}</div>
                <div class="task-project">${task.project}</div>
                `;
                tasksContainer.appendChild(taskCard);
            });

    tasks.append(tasksTitle, tasksContainer);


    return tasks;
};


const loadTasks = () => {
    const main = document.querySelector(".main");
    main.appendChild(tasks());
};

export default loadTasks;