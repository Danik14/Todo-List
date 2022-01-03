import { DomHelperFunctions as domHelper } from "./domHelperFunctions";

function header() {
  const header = domHelper.createElementWithClass("header", "header");
  const logo = domHelper.createElementWithClass("div", "logo");
  logo.id = "sidebarButton";
  const addTask = domHelper.createElementWithClass("button", "btn-header");
  const button = domHelper.createElementWithClass("button", "btn-header");
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>`;
  logo.appendChild(button);
  header.appendChild(logo);
  addTask.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>`;
  header.appendChild(addTask);
  return header;
}

function projectsCollapsible() {
  const projectsCollapsible = domHelper.createElementWithClass(
    "div",
    "projects-collapsible"
  );
  projectsCollapsible.id = "projectsCollapsible";
  const ul = document.createElement("ul");
  domHelper.createListItems(["Project 1", "Project 2"], ul, "projects-item");
  projectsCollapsible.appendChild(ul);

  return projectsCollapsible;
}

function sidebar() {
  const sidebar = domHelper.createElementWithClass("div", "sidebar");
  sidebar.id = "sideBar";
  const ul = document.createElement("ul");
  ul.classList.add("sidebar-list");
  const projects = document.createElement("div");
  projects.id = "projectsButton";
  projects.innerHTML = "Projects";
  domHelper.createListItems(["Home", projects], ul, "side-bar-item");
  sidebar.appendChild(ul);
  sidebar.appendChild(projectsCollapsible());
  return sidebar;
}

function main() {
  const main = domHelper.createElementWithClass("section", "main");
  main.id = "main";
  main.appendChild(sidebar());
  return main;
}

export { header, main };
