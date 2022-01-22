import { header, main, popUpNewTask, newProject } from "./view";
import { Events } from "./eventListeners";
import style from "./style.css";
import { Task } from "./Task";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DomHelperFunctions } from "./domHelperFunctions";

function App() {
  const body = document.getElementsByTagName("body")[0];
  const wrapper = DomHelperFunctions.createElementWithClass(
    "div",
    "container-fluid"
  );
  wrapper.classList.add("px-0");
  wrapper.appendChild(header());
  wrapper.appendChild(main());
  wrapper.appendChild(popUpNewTask());
  wrapper.appendChild(newProject());
  body.appendChild(wrapper);
  Events();
}

App();
