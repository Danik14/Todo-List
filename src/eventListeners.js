import { DomHelperFunctions as domHelper } from "./domHelperFunctions";
import { Task } from "./Task";
import {
  projectSelection,
  allLocalStorage,
  addProjectToLocalStorage,
  addTaskToLocalStorage,
  additionalProjectsSelection,
} from "./additionalLogic";
import { Project } from "./Project";

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function toggleSidebar() {
  const button = document.getElementById("sidebarButton");
  button.addEventListener("click", () => {
    const main = document.getElementById("main");
    const sideBar = document.getElementById("sideBar");
    sideBar.classList.toggle("toggledSideBar");
    main.classList.toggle("toggledMain");
  });
}

function toggleProjects() {
  const button = document.getElementById("projectsButton");
  button.addEventListener("click", () => {
    button.classList.toggle("projects-list-button-active");
    const content = document.getElementById("projectsCollapsible");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function addNewProject() {
  const button = document.getElementById("addNewProjectButton");
  const projects = document.querySelector(".projectsCollapsible > ul");
  const projectsSelect = document.getElementById("formNewTaskProjectSelect");

  button.addEventListener("click", () => {
    const li = domHelper.createElementWithClass("li", "projects-item");
    const projectBtn = domHelper.createElementWithClass("button", "projectBtn");
    const projectName = document.getElementById("newProjectInput").value;
    projectBtn.innerHTML = projectName;
    li.appendChild(projectBtn);
    projects.insertBefore(
      li,
      projects.childNodes[projects.childNodes.length - 1]
    );

    //adding option tag of new project to newTask form
    const opt = document.createElement("option");
    opt.setAttribute("value", projectBtn.innerHTML);
    opt.innerHTML = projectBtn.innerHTML;
    projectsSelect.appendChild(opt);

    const newProject = new Project(projectName);
    addProjectToLocalStorage(newProject);

    setDataIds();
    additionalProjectsSelection();
  });
}

function taskCardCollapsible() {
  const cards = document.getElementsByClassName("taskCard");
  const details = document.getElementsByClassName("taskDetails");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      if (details[i].style.maxHeight) {
        details[i].style.maxHeight = null;
      } else {
        details[i].style.maxHeight = details[i].scrollHeight + "px";
      }
    });
  }
}

function deleteButtons() {
  const buttons = document.getElementsByClassName("deleteButton");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      const taskCard =
        buttons[i].parentElement.parentElement.parentElement.parentElement;
      taskCard.remove();
    });
  }
}

function newTaskFormProjectSelection() {
  const projectsSelect = document.getElementById("formNewTaskProjectSelect");
  const projects = document.querySelector(
    ".projectsCollapsible > ul"
  ).childNodes;

  for (let i = 0; i < projects.length - 1; i++) {
    const opt = document.createElement("option");
    opt.setAttribute("value", projects[i].firstChild.innerHTML);
    opt.innerHTML = projects[i].firstChild.innerHTML;
    projectsSelect.appendChild(opt);
  }
}

function addNewTask() {
  const button = document.getElementById("addNewTaskButton");
  button.addEventListener("click", () => {
    const projects = allLocalStorage();
    const title = document.getElementById("formNewTaskTitle").value;
    const description = document.getElementById("formNewTaskDescription").value;
    const dueDate = document.getElementById("formNewTaskDueDate").value;
    const priority = document.getElementById("formNewTaskPriority").value;
    const projectName = document.getElementById(
      "formNewTaskProjectSelect"
    ).value;

    const task = new Task(title, description, dueDate, priority);
    addTaskToLocalStorage(task, projectName);

    //simulating click instead of page refreshing
    document.querySelector(`button[data-key=${projectName}]`).click();
  });
}

function setDataIds() {
  const projects = allLocalStorage();
  const projects_ = document.getElementsByClassName("projectBtn");
  for (const project_ of projects_) {
    for (const project of projects) {
      if (project_.innerHTML == JSON.parse(project)._name) {
        project_.setAttribute("data-key", `${JSON.parse(project)._name}`);
      }
    }
  }
}

function Events() {
  taskCardCollapsible();
  toggleSidebar();
  toggleProjects();
  addNewProject();
  deleteButtons();
  newTaskFormProjectSelection();
  setDataIds();
  addNewTask();
  projectSelection();
}

export { Events, taskCardCollapsible };
