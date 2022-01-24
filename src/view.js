import { DomHelperFunctions as domHelper } from "./domHelperFunctions";

function header() {
  const header = domHelper.createElementWithClass("header", "header");
  const logo = domHelper.createElementWithClass("div", "logo");
  logo.id = "sidebarButton";
  const addTask = domHelper.createElementWithClass("button", "btn-header");
  addTask.id = "addTaskBtn";
  addTask.setAttribute("type", "button");
  addTask.setAttribute("data-bs-toggle", "modal");
  addTask.setAttribute("data-bs-target", "#newTaskModal");
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
  button.setAttribute("type", "button");
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#exampleModal");
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-window-plus" viewBox="0 0 16 16">
  <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
  <path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4Zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
</svg> New Project`;

  const projectBtn = domHelper.createElementWithClass("button", "projectBtn");
  projectBtn.innerHTML = "Project 1";

  domHelper.createListItems([projectBtn, button], ul, "projects-item");
  projectsCollapsible.appendChild(ul);

  return projectsCollapsible;
}

function newProject() {
  const newProjectModal = document.createElement("div");
  newProjectModal.innerHTML = `
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Project Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input id="newProjectInput" class="form-control" type="text" placeholder="Project Title" aria-label="default input example">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" id="addNewProjectButton">Add new Project</button>
      </div>
    </div>
  </div>
</div>`;
  return newProjectModal;
}

function sidebar() {
  const sidebar = domHelper.createElementWithClass("div", "sidebar");
  sidebar.id = "sideBar";
  const ul = document.createElement("ul");
  ul.classList.add("sidebar-list");
  const projects = document.createElement("button");
  projects.id = "projectsButton";
  const inbox = document.createElement("button");
  inbox.id = "inboxProjectButton";
  const today = document.createElement("button");
  today.id = "todayProjectButton";
  today.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg><span>Today</span>`;
  inbox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg><span>Inbox</span>`;
  projects.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
  <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
</svg><span>Projects</span>`;
  domHelper.createListItems([inbox, today, projects], ul, "sidebar-list-item");
  sidebar.appendChild(ul);
  sidebar.appendChild(projectsCollapsible());
  return sidebar;
}

function popUpNewTask() {
  const div = document.createElement("div");
  div.innerHTML = `
<!-- Modal -->
<div class="modal fade" id="newTaskModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add new Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group mb-3">
            <label for="task-title" class="col-form-label">Title:</label>
            <input type="text" class="form-control" id="task-title">
          </div>
          <div class="form-group mb-3">
            <label for="description-text" class="col-form-label">Description:</label>
            <textarea class="form-control" id="description-text"></textarea>
          </div>
          <div class="form-group mb-3">
            <label for="inputDueDate" class="col-form-label">Due Date:</label>
            <input type="datetime-local" class="form-control" id="inputDueDate">
          </div>
          <div class="form-group mb-3">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Priority:</label>
            <select class="form-select" aria-label="Select Priority">
              <option selected value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div class="form-group mb-3">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Project:</label>
            <select class="form-select" id="projectsSelect" aria-label="Select Project">
              <option selected value="today">Today</option>
            </select>
          </div>
          
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

function boardHeader() {
  const div = domHelper.createElementWithClass("div", "mainHeader");
  const h3 = document.createElement("h3");
  h3.innerHTML = "Inbox";
  div.appendChild(h3);
  return div;
}

function taskOptions() {
  const options = domHelper.createElementWithClass("div", "taskOptions");
  const trash = document.createElement("button");
  trash.classList.add("deleteButton");
  trash.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>`;

  options.appendChild(trash);

  return options;
}

function taskCardDetails() {
  const div = domHelper.createElementWithClass("div", "taskDetails");
  div.id = "taskDetails";
  const description = domHelper.createElementWithClass(
    "div",
    "taskDescription"
  );
  const dateAndPriority = domHelper.createElementWithClass(
    "div",
    "dateAndPriority"
  );
  const date = document.createElement("p");
  const priority = document.createElement("p");
  const desc = document.createElement("p");
  desc.innerHTML = "Description: 12312312313123";
  date.innerHTML = "Due Date: 12/12/1212";
  priority.innerHTML = "Priority: Medium";
  description.appendChild(desc);
  dateAndPriority.appendChild(date);
  dateAndPriority.appendChild(priority);

  div.appendChild(description);
  div.appendChild(dateAndPriority);

  return div;
}

function taskCard() {
  const card = domHelper.createElementWithClass("button", "taskCard");
  card.id = "taskCard";
  const cardMain = domHelper.createElementWithClass("div", "cardMain");
  const cardTitle = document.createElement("div");
  const options = taskOptions();

  cardTitle.innerHTML = "dummyCard";

  cardMain.appendChild(cardTitle);
  cardMain.appendChild(options);

  card.appendChild(cardMain);
  card.appendChild(taskCardDetails());

  return card;
}

function taskCard1() {
  const card = domHelper.createElementWithClass("button", "taskCard");
  card.id = "taskCard";
  const cardMain = domHelper.createElementWithClass("div", "cardMain");
  const cardTitle = document.createElement("div");
  const options = taskOptions();

  cardTitle.innerHTML = "dummyCard111";

  cardMain.appendChild(cardTitle);
  cardMain.appendChild(options);

  card.appendChild(cardMain);
  card.appendChild(taskCardDetails());

  return card;
}

function cards() {
  const ul = domHelper.createElementWithClass("ul", "cards");
  domHelper.createListItems(
    [taskCard(), taskCard(), taskCard1()],
    ul,
    "tasksListItem"
  );

  return ul;
}

function board() {
  const board = domHelper.createElementWithClass("section", "board");
  board.appendChild(boardHeader());
  board.appendChild(cards());
  return board;
}

function main() {
  const main = domHelper.createElementWithClass("section", "main");
  main.id = "main";
  main.appendChild(sidebar());
  main.appendChild(board());
  return main;
}

export { header, main, popUpNewTask, newProject };
