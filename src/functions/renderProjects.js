const projects = () => {
    const projects = document.createElement("div");
    projects.className = "projects";

    const projectsTitle = document.createElement("h1");
    projectsTitle.className = "tasks-title";
    projectsTitle.textContent = "Projects";

        const projectsContainer = document.createElement("div");
        projectsContainer.className = "projects-container";

        function task(id, title, description, project) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.project = project;
        };

        const storedTasks = JSON.parse(localStorage.getItem("myTasks"))
        storedTasks.forEach((task) => {
            const projectCard = document.createElement("div");
            projectCard.className = "project-card";
    
            projectCard.innerHTML = `
            <div class="project-title">${task.project}</div>
            `;
            projectsContainer.appendChild(projectCard);
        });

    projects.append(projectsTitle, projectsContainer)

    return projects;
};

const loadProjects = () => {
    const main = document.querySelector(".main");
    main.appendChild(projects());
};

export default loadProjects;