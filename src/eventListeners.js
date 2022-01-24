import { DomHelperFunctions as domHelper } from "./domHelperFunctions";
import { Task } from "./Task";

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
  const projectsSelect = document.getElementById("projectsSelect");

  button.addEventListener("click", () => {
    const li = domHelper.createElementWithClass("li", "projects-item");
    const projectBtn = domHelper.createElementWithClass("button", "projectBtn");
    projectBtn.innerHTML = document.getElementById("newProjectInput").value;
    li.appendChild(projectBtn);
    projects.insertBefore(
      li,
      projects.childNodes[projects.childNodes.length - 1]
    );

    const opt = document.createElement("option");
    opt.setAttribute("value", projectBtn.innerHTML);
    opt.innerHTML = projectBtn.innerHTML;
    projectsSelect.appendChild(opt);
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

function addTask() {
  const projectsSelect = document.getElementById("projectsSelect");
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

function projectSelection() {
  const today = document.getElementById("todayProjectButton");
  const inbox = document.getElementById("inboxProjectButton");
  const header = document.getElementsByClassName("mainHeader")[0].firstChild;

  today.addEventListener("click", () => {
    header.innerHTML = today.lastChild.innerHTML;
  });
  inbox.addEventListener("click", () => {
    header.innerHTML = inbox.lastChild.innerHTML;
  });
}

export function Events() {
  taskCardCollapsible();
  toggleSidebar();
  toggleProjects();
  addNewProject();
  projectSelection();
  deleteButtons();
  addTask();
}
