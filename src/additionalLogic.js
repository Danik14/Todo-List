import { Task } from "./Task";
import { Project } from "./Project";
import { DomHelperFunctions as domHelper } from "./domHelperFunctions";
import { taskCardCollapsible } from "./eventListeners";

let Inbox = new Project("Inbox");
let Today = new Project("Today");

const task1 = new Task("new Task", "some description", "12/12/1212", "low");
const task2 = new Task("new Task2", "some description", "12/12/1212", "low");

addProjectToLocalStorage(Today);
addProjectToLocalStorage(Inbox);

console.log(localStorage);

function allLocalStorage() {
  let values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}

function addTaskToLocalStorage(task, projectName) {
  const projects = allLocalStorage();
  for (const project of projects) {
    const parsed = JSON.parse(project);
    if (parsed._name == projectName) {
      const newProject = JSON.parse(localStorage.getItem(parsed._id));
      newProject._projectTasks.push(task);
      localStorage.setItem(parsed._id, JSON.stringify(newProject));
      addTaskToInbox(task);
      break;
    }
  }
}

function addTaskToInbox(task) {
  const projects = allLocalStorage();
  for (const project of projects) {
    const parsed = JSON.parse(project);
    if (parsed._name == "Inbox") {
      const newProject = JSON.parse(localStorage.getItem(parsed._id));
      newProject._projectTasks.push(task);
      localStorage.setItem(parsed._id, JSON.stringify(newProject));
      break;
    }
  }
}

function addProjectToLocalStorage(project) {
  const projects = allLocalStorage();
  for (const element of projects) {
    if (
      project.id == JSON.parse(element)._id ||
      project.name == JSON.parse(element)._name
    ) {
      return;
      break;
    }
  }
  localStorage.setItem(project.id, JSON.stringify(project));
}

function createProjectList(projectName) {
  const header = document.getElementsByClassName("mainHeader")[0].firstChild;
  header.innerHTML = projectName;
  const ul = document.getElementById("tasksList");
  domHelper.removeAllChildNodes(ul);
  const projects = allLocalStorage();

  for (const project of projects) {
    const parsed = JSON.parse(project);
    if (parsed._name == projectName) {
      const tasksList = JSON.parse(
        localStorage.getItem(parsed._id)
      )._projectTasks;
      for (const task of tasksList) {
        const li = domHelper.createElementWithClass("li", "tasksListItem");
        const taskCard = domHelper.createElementWithClass("button", "taskCard");
        taskCard.id = "taskCard";
        const cardMain = domHelper.createElementWithClass("div", "cardMain");
        const taskDetails = domHelper.createElementWithClass(
          "div",
          "taskDetails"
        );
        cardMain.innerHTML = `<div>${task._title}</div><div class="taskOptions"><button class="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
</svg></button></div>`;
        taskDetails.innerHTML = `<div class="taskDescription"><p>Description: ${task._description}</p></div><div class="dateAndPriority"><p>Due Date: ${task._dueDate}</p><p>Priority: ${task._priority}</p></div>`;
        taskDetails.id = "taskDetails";
        taskCard.appendChild(cardMain);
        taskCard.appendChild(taskDetails);
        li.appendChild(taskCard);
        ul.appendChild(li);
      }
      taskCardCollapsible();
      return;
    }
  }
}

function projectSelection() {
  const today = document.getElementById("todayProjectButton");
  const inbox = document.getElementById("inboxProjectButton");
  const projects_ = document.querySelector(
    ".projectsCollapsible > ul > li"
  ).childNodes;

  today.addEventListener("click", () => {
    createProjectList("Today");
  });
  inbox.addEventListener("click", () => {
    createProjectList("Inbox");
  });

  for (const project_ of projects_) {
    project_.addEventListener("click", () => {
      createProjectList(project_.innerHTML);
    });
  }
}

// function findDomProject(projectName) {
//   const projects = allLocalStorage();
//   for (const project of projects) {
//     const parsed = JSON.parse(project);
//     if (parsed._name == projectName) {
//       return parsed
//     }
//   }
// }

export {
  projectSelection,
  allLocalStorage,
  addProjectToLocalStorage,
  addTaskToLocalStorage,
};
