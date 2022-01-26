import { Task } from "./Task";
import { Project } from "./Project";
import { DomHelperFunctions as domHelper } from "./domHelperFunctions";
import { taskCardCollapsible } from "./eventListeners";

const Inbox = new Project("inbox");
const Today = new Project("today");

const task1 = new Task("new Task", "some description", "12/12/1212", "low");
const task2 = new Task("new Task2", "some description", "12/12/1212", "low");

Inbox.addTask(task1);
Inbox.addTask(task2);

localStorage.setItem(Inbox.id, JSON.stringify(Inbox));

function createProjectList(project) {
  const ul = document.getElementById("tasksList");
  domHelper.removeAllChildNodes(ul);
  if (project.id in localStorage) {
    const tasksList = JSON.parse(
      localStorage.getItem(project.id)
    )._projectTasks;
    for (let i = 0; i < tasksList.length; i++) {
      const li = domHelper.createElementWithClass("li", "tasksListItem");
      const taskCard = domHelper.createElementWithClass("button", "taskCard");
      taskCard.id = "taskCard";
      const cardMain = domHelper.createElementWithClass("div", "cardMain");
      const taskDetails = domHelper.createElementWithClass(
        "div",
        "taskDetails"
      );
      cardMain.innerHTML = `<div>dummyCard</div><div class="taskOptions"><button class="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
</svg></button></div>`;
      taskDetails.innerHTML = `<div class="taskDescription"><p>Description: 12312312313123</p></div><div class="dateAndPriority"><p>Due Date: 12/12/1212</p><p>Priority: Medium</p></div>`;
      taskDetails.id = "taskDetails";
      taskCard.appendChild(cardMain);
      taskCard.appendChild(taskDetails);
      li.appendChild(taskCard);
      ul.appendChild(li);
    }
    taskCardCollapsible();
  }
}

export function projectSelection() {
  const today = document.getElementById("todayProjectButton");
  const inbox = document.getElementById("inboxProjectButton");
  const header = document.getElementsByClassName("mainHeader")[0].firstChild;

  today.addEventListener("click", () => {
    header.innerHTML = today.lastChild.innerHTML;
  });
  inbox.addEventListener("click", () => {
    header.innerHTML = inbox.lastChild.innerHTML;
    createProjectList(Inbox);
  });
}
