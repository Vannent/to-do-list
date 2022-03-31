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

                const taskCardButtons = document.createElement("div");
                taskCardButtons.className = "task-buttons";

                const taskComplete = document.createElement("button");
                taskComplete.className = "complete-button";
                taskComplete.innerHTML = `<svg class="complete-button" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                </svg>`;

                const taskUncomplete = document.createElement("button");
                taskUncomplete.className = "uncomplete-button";
                taskUncomplete.innerHTML = `<svg class="uncomplete-button" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>`;

                const taskRemove = document.createElement("button");
                taskRemove.className = "delete-button";
                taskRemove.innerHTML = `<svg class="delete-button" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                </svg>`;

                taskCardButtons.append(taskComplete, taskUncomplete, taskRemove);
                taskCard.appendChild(taskCardButtons);
                tasksContainer.appendChild(taskCard);
            });

            tasksContainer.addEventListener("click", (e) => {
                manageTask(e.target)
            });

            const manageTask = (target) => {
                if(target.classList.contains("delete-button")) {
                    target.parentElement.parentElement.parentElement.remove();
                };
                if(target.classList.contains("complete-button")) {
                    target.parentElement.parentElement.parentElement.style.backgroundColor = "#75EDBF";
                };
                if(target.classList.contains("uncomplete-button")) {
                    target.parentElement.parentElement.parentElement.style.backgroundColor = "#e4e2e2c0";
                };
            };

    tasks.append(tasksTitle, tasksContainer);


    return tasks;
};


const loadTasks = () => {
    const main = document.querySelector(".main");
    main.appendChild(tasks());
};

export default loadTasks;