import { DomHelperFunctions as domHelper } from "./domHelperFunctions";

function header() {
  const header = domHelper.createElementWithClass("header", "header");
  const logo = domHelper.createElementWithClass("div", "logo");
  logo.id = "sidebarButton";
  const addTask = domHelper.createElementWithClass("button", "btn-header");
  addTask.setAttribute("type", "button");
  addTask.setAttribute("data-bs-toggle", "modal");
  addTask.setAttribute("data-bs-target", "#staticBackdrop");
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
    "projectsCollapsible"
  );
  projectsCollapsible.id = "projectsCollapsible";
  const ul = document.createElement("ul");
  const button = domHelper.createElementWithClass("button", "newProjectButton");
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-window-plus" viewBox="0 0 16 16">
  <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
  <path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4Zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
</svg> New Project`;
  domHelper.createListItems(
    ["Project 1", "Project 2", button],
    ul,
    "projects-item"
  );
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
  const home = document.createElement("div");
  home.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg><span>Home</span>`;
  projects.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
  <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
</svg><span>Projects</span>`;
  domHelper.createListItems([home, projects], ul, "sidebar-list-item");
  sidebar.appendChild(ul);
  sidebar.appendChild(projectsCollapsible());
  return sidebar;
}

function popUpNewTask() {
  const div = document.createElement("div");
  div.innerHTML = `
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add new Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="task-name" class="col-form-label">Title:</label>
            <input type="text" class="form-control" id="task-name">
          </div>
          <div class="mb-3">
            <label for="description-text" class="col-form-label">Description:</label>
            <textarea class="form-control" id="description-text"></textarea>
          </div>
          <i class="bi-alarm"></i>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>`;

  return div;
}

function main() {
  const main = domHelper.createElementWithClass("section", "main");
  main.id = "main";
  main.appendChild(sidebar());
  main.append(popUpNewTask());
  return main;
}

export { header, main };
