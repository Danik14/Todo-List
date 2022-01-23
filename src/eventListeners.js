import { DomHelperFunctions as domHelper } from "./domHelperFunctions";

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
  button.addEventListener("click", () => {
    const li = domHelper.createElementWithClass("li", "projects-item");
    li.innerHTML = document.getElementById("newProjectInput").value;
    projects.appendChild(li);
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

function Events() {
  taskCardCollapsible();
  toggleSidebar();
  toggleProjects();
  addNewProject();
  deleteButtons();
}

export { Events };
